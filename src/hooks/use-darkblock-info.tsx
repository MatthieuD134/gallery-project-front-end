"use client";

import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { Address } from "viem";

import { getDarkblockInfo, IDarkblockInfoResponse } from "@/services/queries";

const useDarkblockInfo = (contractAddress: Address, tokenId?: string) => {
  return useQuery<AxiosResponse<IDarkblockInfoResponse>>({
    queryKey: ["darkblock", contractAddress, tokenId],
    queryFn: () => getDarkblockInfo(contractAddress, tokenId),
    enabled: !!contractAddress && !!tokenId,
    refetchOnWindowFocus: false,
  });
};

export default useDarkblockInfo;
