import { cookieStorage, createConfig, createStorage, http } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";
import { coinbaseWallet, injected, walletConnect } from "wagmi/connectors";

// Get projectId at https://cloud.walletconnect.com
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

if (!projectId) throw new Error("Project ID is not defined");

const metadata = {
  name: "Galerie NFT",
  description: "Galerie de NFTs",
  url: "https://web3modal.com", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

export const mainnetConfig = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
  connectors: [
    walletConnect({ projectId, metadata, showQrModal: false }),
    injected({ shimDisconnect: true }),
    coinbaseWallet({
      appName: metadata.name,
      appLogoUrl: metadata.icons[0],
    }),
  ],
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
});

export const sepoliaConfig = createConfig({
  chains: [sepolia],
  transports: {
    [sepolia.id]: http(),
  },
  connectors: [
    walletConnect({ projectId, metadata, showQrModal: false }),
    injected({ shimDisconnect: true }),
    coinbaseWallet({
      appName: metadata.name,
      appLogoUrl: metadata.icons[0],
    }),
  ],
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
});

export const wagmiConfig =
  process.env.NEXT_PUBLIC_CHAIN_ID === "mainnet"
    ? mainnetConfig
    : sepoliaConfig;
