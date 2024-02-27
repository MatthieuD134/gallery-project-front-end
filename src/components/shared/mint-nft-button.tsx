import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useCallback } from "react";
import { useAccount, useWriteContract } from "wagmi";

import { GalleryNFT } from "@/abi";
import { GALLERY_NFT_ADDRESS } from "@/constants";

import { Button, ButtonProps } from "../ui/button";

const MintNFTButton = ({
  nftId,
  ...props
}: ButtonProps & { nftId: number }) => {
  const { address, isConnecting } = useAccount();
  const { open } = useWeb3Modal();
  const { writeContract, isPending } = useWriteContract();

  const buyNFT = useCallback(() => {
    writeContract({
      address: GALLERY_NFT_ADDRESS,
      abi: GalleryNFT.abi,
      functionName: "mint",
      args: [nftId, 1, address],
    });
    console.log({
      address: GALLERY_NFT_ADDRESS,
      abi: GalleryNFT.abi,
      functionName: "mint",
      args: [nftId, 1, address],
    });
  }, [nftId, address, writeContract]);

  return (
    <Button
      disabled={isConnecting || isPending}
      onClick={address ? () => buyNFT() : () => open()}
      {...props}
    >
      {isPending ? "En cours..." : "Acheter"}
    </Button>
  );
};

export default MintNFTButton;
