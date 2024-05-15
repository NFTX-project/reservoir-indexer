import { ChainIdToAddress, Network } from "../utils";

export const VaultFactory: ChainIdToAddress = {
  [Network.EthereumGoerli]: "0x1d552a0e6c2f680872c4a88b1e7def05f1858df0",
  [Network.EthereumSepolia]: "0x31c56caf49125043e80b4d3c7f8734f949d8178c",
  [Network.Ethereum]: "0xc255335bc5abd6928063f5788a5e420554858f01",
  [Network.Arbitrum]: "0x4deeb9d2bff2e9c35ce1f013dcc4582f891cb711",
  [Network.Base]: "0x0d74b761eab5cc7cc0e4e625a2e2b8251a4915c6",
};

export const MarketplaceZap: ChainIdToAddress = {
  [Network.EthereumGoerli]: "0x5a40c0288d23e83a23bb16c29b790f7e49e49ee6",
  [Network.EthereumSepolia]: "0xd88a3b9d0fb2d39ec8394cffd983afbb2d4a6410",
  [Network.Ethereum]: "0x293a0c49c85f1d8851c665ac3ce1f1dc2a79be3d",
  [Network.Arbitrum]: "0xf56296b3010a59ef7f0915569dd44e1302b9ca40",
  [Network.Base]: "0x31cb832f661cd90fc9fca6fb70a39ca811a02aed",
};

export const NFTXUniversalRouter: ChainIdToAddress = {
  [Network.EthereumGoerli]: "0xf7c4fc5c2e30258e1e4d1197fc63aede371508f3",
  [Network.EthereumSepolia]: "0x12156cCA1958B6591CC49EaE03a5553458a4b424",
  [Network.Ethereum]: "0x250d62a67254a46c0de472d2c9215e1d890cc90f",
  [Network.Arbitrum]: "0x0da69287b4c1b28181e5d155dddda7fa5c32e5ad",
  [Network.Base]: "0x7c656f0691db983ee78f68189c55c36d1862c901",
};

export const CreateVaultZap: ChainIdToAddress = {
  [Network.EthereumGoerli]: "0x040fe06abc3c099772dee413de138937bf053543",
  [Network.EthereumSepolia]: "0xd80b916470f8e79fd8d09874cb159cbb8d13d8da",
  [Network.Ethereum]: "0x56dab32697b4a313f353da0ce42b5113ed8e6f74",
  [Network.Arbitrum]: "0xf9e891ab1eca89b7a4b3cbd45aebfdf3ec38946f",
  [Network.Base]: "0x2d77756c139ed3c25472daf233f332e8f605dd8e",
};

export const QuoterV2: ChainIdToAddress = {
  [Network.EthereumGoerli]: "0xbb473dbef3363b5d7cdd5f12429fd1c5f0c10499",
  [Network.EthereumSepolia]: "0xb8eb27ca4715f7a04228c6f83935379d1f5ababd",
  [Network.Ethereum]: "0x5493df723c17b6a768aa61f79405ba56ffc5294a",
  [Network.Arbitrum]: "0xff3957cb28ab34186543281e0bbe0de05c9e7d6d",
  [Network.Base]: "0xff40913ca69912212e00e93ad4dd1480a7aef13a",
};
