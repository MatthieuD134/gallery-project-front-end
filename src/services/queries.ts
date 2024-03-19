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

export interface IDarkblockInfo {
  id: string;
  block: {
    id: string;
    timestamp: number;
    height: number;
  };
  data: {
    size: string;
    type: string;
  };
  owner: { address: Address };
  signature: string;
  tags: {
    name: string;
    value: string;
  }[];
  verified: boolean;
}

export interface IDarkblockInfoResponse {
  darkblock: IDarkblockInfo;
  dbs_count: number;
  dbstack: IDarkblockInfo[];
}

export const getDarkblockInfo = async (
  contractAddress?: Address,
  tokenId?: string,
): Promise<AxiosResponse<IDarkblockInfoResponse>> => {
  return await axios.get("https://api.darkblock.io/v1/darkblock/info", {
    params: {
      verified: "creator",
      nft_id: `${contractAddress}:${tokenId}`,
      nft_platform:
        process.env.NEXT_PUBLIC_CHAIN_ID === "polygon"
          ? "Polygon"
          : "Polygon-Mumbai",
    },
  });
};

export const getDarkblockProxy = async (
  artId?: string,
  sessionToken?: string,
  tokenId?: string,
  contractAddress?: Address,
  ownerAddress?: Address,
): Promise<AxiosResponse> => {
  return await axios.get("https://gateway.darkblock.io/proxy", {
    params: {
      artid: artId,
      session_token: sessionToken,
      token_id: tokenId,
      contract: contractAddress,
      platform:
        process.env.NEXT_PUBLIC_CHAIN_ID === "polygon"
          ? "Polygon"
          : "Polygon-Mumbai",
      owner: ownerAddress,
    },
  });
};
