import { OwnedNft } from "alchemy-sdk";
import Image from "next/image";

const NftList = ({ nfts }: { nfts: OwnedNft[] }) => {
  if (nfts.length === 0) {
    return (
      <div className="w-full text-center opacity-20">
        Vous ne possédez aucun Comics
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-4 gap-y-10 md:grid-cols-4 ">
      {nfts.map((nft) => (
        <div key={nft.tokenId}>
          <div className="relative aspect-[3/4] ">
            <Image
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
        </div>
      ))}
    </div>
  );
};

export default NftList;
