import { OwnedNftsResponse } from "alchemy-sdk";
import axios, { AxiosResponse } from "axios";
import { Address } from "viem";

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
