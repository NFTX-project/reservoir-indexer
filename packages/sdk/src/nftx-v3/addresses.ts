import { ChainIdToAddress, Network } from "../utils";

export const VaultFactory: ChainIdToAddress = {
  [Network.EthereumGoerli]: "0x1d552a0e6c2f680872c4a88b1e7def05f1858df0",
  [Network.EthereumSepolia]: "0x31c56caf49125043e80b4d3c7f8734f949d8178c",
  [Network.Ethereum]: "0xc255335bc5abd6928063f5788a5e420554858f01",
  [Network.Arbitrum]: "0xc255335bc5abd6928063f5788a5e420554858f01",
  [Network.Base]: "0xc255335bc5abd6928063f5788a5e420554858f01",
};

export const MarketplaceZap: ChainIdToAddress = {
  [Network.EthereumGoerli]: "0x5a40c0288d23e83a23bb16c29b790f7e49e49ee6",
  [Network.EthereumSepolia]: "0xd88a3b9d0fb2d39ec8394cffd983afbb2d4a6410",
  [Network.Ethereum]: "0x293a0c49c85f1d8851c665ac3ce1f1dc2a79be3d",
  [Network.Arbitrum]: "0xf56296B3010a59Ef7F0915569DD44E1302b9Ca40",
  [Network.Base]: "0x31cB832F661Cd90fc9Fca6fB70A39cA811a02aEd",
};

export const NFTXUniversalRouter: ChainIdToAddress = {
  [Network.EthereumGoerli]: "0xf7c4fc5c2e30258e1e4d1197fc63aede371508f3",
  [Network.EthereumSepolia]: "0x12156cCA1958B6591CC49EaE03a5553458a4b424",
  [Network.Ethereum]: "0x250d62a67254a46c0de472d2c9215e1d890cc90f",
  [Network.Arbitrum]: "0x0DA69287B4C1B28181E5d155dDDda7Fa5C32E5Ad",
  [Network.Base]: "0x7c656F0691Db983ee78f68189c55C36d1862c901",
};

export const CreateVaultZap: ChainIdToAddress = {
  [Network.EthereumGoerli]: "0x040fe06abc3c099772dee413de138937bf053543",
  [Network.EthereumSepolia]: "0xd80b916470f8e79fd8d09874cb159cbb8d13d8da",
  [Network.Ethereum]: "0x56dab32697b4a313f353da0ce42b5113ed8e6f74",
  [Network.Arbitrum]: "0xF9E891AB1ECa89B7A4B3cBD45aEBFDF3Ec38946F",
  [Network.Base]: "0x2D77756C139ed3c25472Daf233F332E8F605Dd8E",
};

export const QuoterV2: ChainIdToAddress = {
  [Network.EthereumGoerli]: "0xbb473dbef3363b5d7cdd5f12429fd1c5f0c10499",
  [Network.EthereumSepolia]: "0xb8eb27ca4715f7a04228c6f83935379d1f5ababd",
  [Network.Ethereum]: "0x5493df723c17b6a768aa61f79405ba56ffc5294a",
  [Network.Arbitrum]: "0xff3957CB28aB34186543281e0bbe0De05C9e7D6D",
  [Network.Base]: "0xFf40913CA69912212e00e93Ad4DD1480A7aeF13A",
};
