import { OwnedNft } from "alchemy-sdk";
import Image from "next/image";
import { useState } from "react";

import NftDetails from "./nft-details";

const NftList = ({ nfts }: { nfts: OwnedNft[] }) => {
  const [selectedNFT, setSelectedNFT] = useState<OwnedNft | null>(null);

  if (selectedNFT) {
    return (
      <NftDetails nft={selectedNFT} onClose={() => setSelectedNFT(null)} />
    );
  }

  if (nfts.length === 0) {
    return (
      <div className="w-full text-center opacity-20">
        Vous ne possédez aucun Comics
      </div>
    );
  }

  return (
    <>
      <h5 className="mx-5 mb-4 text-gray-500">Mon inventaire</h5>
      <div className="grid max-h-[75svh] grid-cols-3 gap-4 gap-y-10 overflow-y-scroll px-5 md:grid-cols-4">
        {nfts.map((nft) => (
          <button
            key={nft.tokenId}
            className="group"
            onClick={() => setSelectedNFT(nft)}
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                className="transition-transform group-hover:scale-110 group-focus:scale-110"
                src={nft.image.originalUrl || ""}
                alt={`Illustration of the NFT ${nft.tokenId}`}
                layout="fill"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="mt-2">
              <div className="w-full text-left text-xs text-gray-500">
                #{nft.tokenId}
              </div>
              <div className="line-clamp-2 w-full text-left text-sm">
                {nft.name}
              </div>
            </div>
          </button>
        ))}
      </div>
    </>
  );
};

export default NftList;
