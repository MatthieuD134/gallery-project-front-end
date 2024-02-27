import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useCallback, useEffect } from "react";
import { parseEther } from "viem";
import { useAccount, useWriteContract } from "wagmi";

import { GalleryNFT } from "@/abi";
import { GALLERY_NFT_ADDRESS } from "@/constants";

import { useAddMintTransaction } from "../atoms/mint-transactions";
import { Button, ButtonProps } from "../ui/button";
import { toast } from "../ui/use-toast";

const MintNFTButton = ({
  nftId,
  nftPrice,
  ...props
}: ButtonProps & { nftId: number; nftPrice: number }) => {
  const { address, isConnecting } = useAccount();
  const { open } = useWeb3Modal();
  const { writeContract, isPending, error, data: txHash } = useWriteContract();
  const addMintTransactionToWatcher = useAddMintTransaction();

  const buyNFT = useCallback(() => {
    writeContract({
      address: GALLERY_NFT_ADDRESS,
      abi: GalleryNFT.abi,
      functionName: "mint",
      args: [nftId, 1, address],
      value: parseEther(nftPrice.toString()),
    });
  }, [nftId, address, writeContract, nftPrice]);

  useEffect(() => {
    if (error) {
      const isCanceled = error.message?.includes("User rejected the request.");
      toast({
        title: isCanceled
          ? "La transaction a été annulée."
          : "Oh oh! Une erreur est survenue.",
        ...(isCanceled
          ? {}
          : {
              description:
                "Il y a eu une erreur lors de l'achat de votre NFT, veuillez réessayer ou recharger la page.",
              variant: "destructive",
            }),
      });
    }
  }, [error]);

  useEffect(() => {
    if (txHash) {
      addMintTransactionToWatcher({
        hash: txHash,
        nftId,
        contractAddress: GALLERY_NFT_ADDRESS,
      });
    }
  }, [txHash, addMintTransactionToWatcher, nftId]);

  return (
    <>
      <Button
        disabled={isConnecting || isPending}
        onClick={address ? () => buyNFT() : () => open()}
        {...props}
      >
        {isPending ? "En cours..." : "Acheter"}
      </Button>
    </>
  );
};

export default MintNFTButton;
