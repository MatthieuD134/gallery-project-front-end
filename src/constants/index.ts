import { Address } from "viem";

export const GALLERY_NFT_ADDRESS = (process.env
  .NEXT_PUBLIC_GALLERY_NFT_ADDRESS || "0x") as Address;
