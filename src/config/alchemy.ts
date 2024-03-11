import { Network } from "alchemy-sdk";

// Optional Config object, but defaults to demo api-key and eth-mainnet.
export const alchemySettings = {
  apiKey: process.env.ALCHEMY_API_KEY,
  network:
    process.env.NEXT_PUBLIC_CHAIN_ID === "mainnet"
      ? Network.ETH_MAINNET
      : Network.ETH_SEPOLIA,
};
