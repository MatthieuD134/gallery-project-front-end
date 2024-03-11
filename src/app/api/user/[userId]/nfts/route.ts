import { Alchemy } from "alchemy-sdk";
import { NextRequest } from "next/server";
import { isAddress } from "viem";

import { alchemySettings } from "@/config/alchemy";

export async function GET(
  request: NextRequest,
  { params }: { params: { userId: string } },
) {
  const userId = params.userId;
  const searchParams = request.nextUrl.searchParams;
  const pageKey = (searchParams.get("pageKey") as string) || undefined;
  // check if userId is a correct ethereum address
  if (!isAddress(userId)) {
    return Response.json(
      {
        message: "User not found",
        status: 404,
      },
      {
        status: 404,
      },
    );
  }

  const alchemy = new Alchemy(alchemySettings);

  const data = await alchemy.nft.getNftsForOwner(userId, {
    contractAddresses: process.env.NEXT_PUBLIC_GALLERY_NFT_ADDRESS
      ? [process.env.NEXT_PUBLIC_GALLERY_NFT_ADDRESS]
      : [],
    pageKey,
  });

  return Response.json(data);
}
