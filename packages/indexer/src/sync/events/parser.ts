import { Log } from "@ethersproject/abstract-provider";

import * as syncEventsUtils from "@/events-sync/utils";
import * as blocksModel from "@/models/blocks";

export type BaseEventParams = {
  address: string;
  block: number;
  blockHash: string;
  txHash: string;
  txIndex: number;
  logIndex: number;
  timestamp: number;
  batchIndex: number;
  from: string;
  to: string;
};

export const parseEvent = async (
  log: Log,
  blocksCache: Map<number, blocksModel.Block>,
  batchIndex = 1,
  txData: {
    from: string;
    to: string;
  }
): Promise<BaseEventParams> => {
  const address = log.address.toLowerCase();
  const block = log.blockNumber;
  const blockHash = log.blockHash.toLowerCase();
  const txHash = log.transactionHash.toLowerCase();
  const txIndex = log.transactionIndex;
  const logIndex = log.logIndex;
  const from = txData?.from?.toLowerCase();
  const to = txData?.to?.toLowerCase();

  let blockResult = blocksCache.get(block);
  if (!blockResult) {
    blocksCache.set(block, await syncEventsUtils.fetchBlock(block));
    blockResult = blocksCache.get(block)!;
  }

  return {
    address,
    txHash,
    txIndex,
    block,
    blockHash,
    logIndex,
    timestamp: blockResult.timestamp,
    batchIndex,
    from,
    to,
  };
};
