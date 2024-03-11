"use client";

import { useAccount } from "wagmi";

import useUserNFTs from "./use-user-nfts";

const useCurrentUserNFTs = () => {
  const { address } = useAccount();

  return useUserNFTs(address);
};

export default useCurrentUserNFTs;
