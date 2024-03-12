"use client";

import { useQuery } from "@tanstack/react-query";
import { OwnedNftsResponse } from "alchemy-sdk";
import { AxiosResponse } from "axios";
import { Address } from "viem";

import { getUserNFTs } from "@/services/queries";

const useUserNFTs = (userId?: Address) => {
  return useQuery<AxiosResponse<OwnedNftsResponse>>({
    queryKey: ["nfts", userId],
    queryFn: () => getUserNFTs(userId),
    enabled: !!userId,
  });
};

export default useUserNFTs;
