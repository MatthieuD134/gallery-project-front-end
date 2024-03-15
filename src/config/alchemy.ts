import { Network } from "alchemy-sdk";

// Optional Config object, but defaults to demo api-key and eth-mainnet.
export const alchemySettings = {
  apiKey: process.env.ALCHEMY_API_KEY,
  network:
    process.env.NEXT_PUBLIC_CHAIN_ID === "polygon"
      ? Network.MATIC_MAINNET
      : Network.MATIC_MUMBAI,
};
