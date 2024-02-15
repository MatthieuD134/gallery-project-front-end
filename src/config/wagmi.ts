import { createConfig, http } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";

export const mainnetConfig = createConfig({
  chains: [mainnet],
  transports: {
    [mainnet.id]: http(),
  },
});

export const sepoliaConfig = createConfig({
  chains: [sepolia],
  transports: {
    [sepolia.id]: http(),
  },
});

export const wagmiConfig =
  process.env.NEXT_PUBLIC_CHAIN_ID === "mainnet"
    ? mainnetConfig
    : sepoliaConfig;
