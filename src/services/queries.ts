import { useQuery } from "@tanstack/react-query";
import { OwnedNftsResponse } from "alchemy-sdk";
import axios, { AxiosResponse } from "axios";
import { Address } from "viem";
import { useAccount } from "wagmi";

export const getUserNFTs = async (
  userId?: Address,
  pageKey?: string,
): Promise<AxiosResponse<OwnedNftsResponse>> => {
  return await axios.get(`/api/user/${userId}/nfts`, {
    params: {
      pageKey,
    },
  });
};

export const useUserNFTs = (userId?: Address) => {
  return useQuery<AxiosResponse<OwnedNftsResponse>>({
    queryKey: ["nfts", userId],
    queryFn: () => getUserNFTs(userId),
    enabled: !!userId,
  });
};

export const useCurrentUserNFTs = () => {
  const { address } = useAccount();

  return useUserNFTs(address);
};
