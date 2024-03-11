import { OwnedNft } from "alchemy-sdk";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const NftList = ({ nfts }: { nfts: OwnedNft[] }) => {
  const [selectedNFT, setSelectedNFT] = useState<OwnedNft | null>(null);

  if (selectedNFT) {
    return (
      <div>
        <Button
          className="absolute left-2 top-2 flex text-gray-500"
          onClick={() => setSelectedNFT(null)}
        >
          <ArrowLeft /> Retour
        </Button>
        <div className="mt-4 flex flex-row justify-between gap-4 md:mx-2">
          <div className="relative aspect-[3/4] w-1/3 flex-shrink-0 overflow-hidden">
            <Image
              src={selectedNFT.image.originalUrl || ""}
              alt={`Illustration of the NFT ${selectedNFT.tokenId}`}
              layout="fill"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="flex flex-col justify-between gap-2 text-sm md:gap-4">
            <div className="flex gap-10">
              <div className="flex flex-col gap-0">
                <div className="text-xs text-gray-500">Nom</div>
                <div>{selectedNFT.name}</div>
              </div>

              <div className="flex flex-col gap-0">
                <div className="text-xs text-gray-500">Id</div>
                <div>#{selectedNFT.tokenId}</div>
              </div>
            </div>

            <div className="flex flex-grow-0 basis-3/5 flex-col gap-0">
              <div className="text-xs text-gray-500">Description</div>
              <div className="line-clamp-3 w-full">
                {selectedNFT.description}
              </div>
            </div>

            <div className="flex flex-grow-0 basis-2/3 flex-col gap-1">
              <div className="text-xs text-gray-500">Attributs</div>
              <div className="flex flex-wrap gap-1">
                {selectedNFT.raw.metadata.attributes.map(
                  (attr: { trait_type: string; value: string | number }) => (
                    <Badge
                      key={attr.trait_type}
                      variant="secondary"
                      className="flex gap-2"
                    >
                      <span className="opacity-50">{attr.trait_type}</span>
                      <span>{attr.value}</span>
                    </Badge>
                  ),
                )}
              </div>
            </div>

            <Button variant="tertiary">Lire le comic</Button>
          </div>
        </div>
      </div>
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
              <div className="text-xs opacity-20">#{nft.tokenId}</div>
              <div className="line-clamp-2 text-sm">{nft.name}</div>
            </div>
          </button>
        ))}
      </div>
    </>
  );
};

export default NftList;
