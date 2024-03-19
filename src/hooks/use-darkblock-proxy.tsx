"use client";

import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { Address } from "viem";

import { getDarkblockProxy } from "@/services/queries";

const useDarkblockProxy = (
  artId?: string,
  sessionToken?: string,
  tokenId?: string,
  contractAddress?: Address,
  ownerAddress?: Address,
) => {
  return useQuery<AxiosResponse>({
    queryKey: [
      "darkblock-proxy",
      artId,
      sessionToken,
      tokenId,
      contractAddress,
    ],
    queryFn: () =>
      getDarkblockProxy(
        artId,
        sessionToken,
        tokenId,
        contractAddress,
        ownerAddress,
      ),
    enabled: !!artId && !!sessionToken && !!tokenId && !!contractAddress,
    refetchOnWindowFocus: false,
  });
};

export default useDarkblockProxy;
