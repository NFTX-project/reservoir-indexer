import { idb } from "@/common/db";
import { redis } from "@/common/redis";
import { AbstractRabbitMqJobHandler } from "@/jobs/abstract-rabbit-mq-job-handler";
import { collectionCheckSpamJob } from "@/jobs/collections-refresh/collections-check-spam-job";

export class BackfillTransferSpamJob extends AbstractRabbitMqJobHandler {
  queueName = "backfill-transfer-spam";
  maxRetries = 10;
  concurrency = 1;
  persistent = false;
  lazyMode = false;
  singleActiveConsumer = true;

  protected async process() {
    const blocksPerBatch = 50;
    let blockRangeRedis = await redis.get(`${this.queueName}:blockRange:${this.queueName}`);
    if (!blockRangeRedis) {
      // query nft_transfer_events to find the first and last block number
      const blockRange = await idb.oneOrNone(
        `
        SELECT MIN(block_number) as min_block_number, MAX(block_number) as max_block_number
        FROM nft_transfer_events
        `
      );

      if (blockRange) {
        await redis.set(
          `${this.queueName}:blockRange:${this.queueName}`,
          JSON.stringify([blockRange.max_block_number, blockRange.min_block_number])
        );
        blockRangeRedis = JSON.stringify([
          blockRange.max_block_number,
          blockRange.min_block_number,
        ]);
      }
    }

    const [startBlock, endBlock] = blockRangeRedis ? JSON.parse(blockRangeRedis) : [0, 0];

    const blockValues = {
      startBlock: startBlock, // max block number in db
      endBlock: Math.max(endBlock, startBlock - blocksPerBatch), // max block number in db - blocksPerBatch
    };

    // find:
    // - transactions where there are more than 100 transfers in the same tx to distinct addresses
    // - where the contract is an erc1155 contract
    const transferEvents = await idb.oneOrNone(
      `
      SELECT tx_hash, count(*), c.kind, c.address
      FROM nft_transfer_events
      JOIN contracts c on nft_transfer_events.address = c.address
      wHERE block >= $/startBlock/ AND block <= $/endBlock/
      AND c.kind = 'erc1155'
      GROUP BY tx_hash, c.kind, c.address
      HAVING COUNT(distinct (nft_transfer_events."to")) > 100
    `,
      blockValues
    );

    const contractSet = new Set<string>();

    if (transferEvents) {
      for (const transferEvent of transferEvents) {
        contractSet.add(transferEvent.address);
      }
    }

    // add each contract to be checked for spam evaluation
    await Promise.all(
      Array.from(contractSet).map(async (contract) => {
        await collectionCheckSpamJob.addToQueue({
          collectionId: contract,
        });
      })
    );

    await redis.set(
      `${this.queueName}:blockRange`,
      JSON.stringify([blockValues.endBlock, endBlock])
    );

    // if from/end block is not the last block, add to queue
    if (blockValues.endBlock < endBlock) {
      return {
        addToQueue: true,
      };
    }
  }

  public async addToQueue(delay = 0) {
    await this.send({ payload: {} }, delay);
  }
}

export const backfillTransferSpamJob = new BackfillTransferSpamJob();
