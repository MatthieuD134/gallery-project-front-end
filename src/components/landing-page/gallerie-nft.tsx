import nftImage1 from "@public/images/nft-illustration-1.png";
import nftImage2 from "@public/images/nft-illustration-2.png";
import nftImage3 from "@public/images/nft-illustration-3.png";
import nftImage4 from "@public/images/nft-illustration-4.png";
import Image, { StaticImageData } from "next/image";

import { BubbleButton, Button } from "../ui/button";

interface NftInfo {
  id: number;
  image: StaticImageData;
  name: string;
  price: number;
}

const NFTs: NftInfo[] = [
  {
    id: 1,
    image: nftImage1,
    name: "Couverture de john l'histoire veritable",
    price: 0,
  },
  {
    id: 2,
    image: nftImage2,
    name: "Couverture de john l'histoire veritable 2",
    price: 0,
  },
  {
    id: 3,
    image: nftImage3,
    name: "Couverture de john l'histoire veritable 3",
    price: 0,
  },
  {
    id: 4,
    image: nftImage4,
    name: "Couverture de john l'histoire veritable 4",
    price: 0,
  },
];

export default function GalleryNFT() {
  return (
    <section id="gallery">
      <div className="flex flex-col items-center bg-tertiary px-2 text-tertiary-foreground">
        <div className="flex max-w-4xl flex-col items-center p-2">
          <h2 className="text-balance text-5xl uppercase">Gallery NFT</h2>
          <p className="my-8 text-lg">
            Bienvenue dans notre galerie NFT, où vous pouvez acheter des œuvres
            d&apos;art uniques et rares sous forme de jetons non fongibles. Les
            NFTs représentent l&apos;authenticité et la rareté de chaque pièce,
            ce qui les rend vraiment spéciales.
            <br /> En achetant nos NFTs, non seulement vous obtenez une œuvre
            d&apos;art exclusive, mais vous débloquez également l&apos;accès à
            notre serveur Discord privé où vous pourrez interagir avec
            l&apos;artiste et d&apos;autres fans passionnés. Chaque achat
            contribue directement à soutenir notre artiste et à lui permettre de
            continuer à créer des mondes incroyables dans ses bandes dessinées
            et ses jeux.
            <br /> Ne manquez pas cette occasion de posséder une partie de notre
            univers unique et de soutenir l&apos;artiste pour qu&apos;il puisse
            continuer à partager sa créativité avec le monde !
          </p>
        </div>
        <div className="my-10 grid max-w-6xl grid-cols-2 items-center gap-8 gap-y-10 md:grid-cols-4">
          {NFTs.map((nftInfo) => (
            <div
              key={nftInfo.id}
              className="relative col-span-1 flex flex-col items-center"
            >
              <span className="w-full">
                <Image
                  src={nftInfo.image}
                  alt={`illustration for nft - ${nftInfo.name}`}
                />
              </span>
              <div className="mb-8 mt-4 flex flex-col items-center gap-4">
                <h3 className="line-clamp-2 text-xl uppercase">
                  {nftInfo.name}
                </h3>
                <div className="flex w-full flex-row items-center justify-between">
                  <span>{nftInfo.price} ETH</span>
                  <span className="text-sm opacity-50">{nftInfo.price} €</span>
                  <span className="h-6 w-6 rounded-full border text-center font-semibold">
                    ?
                  </span>
                </div>
                <Button
                  className="w-full text-xl uppercase"
                  variant="secondary"
                >
                  Acheter
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="z-10 flex justify-center">
          <BubbleButton
            className="mx-4 w-fit p-8 text-2xl uppercase"
            variant="card"
            invertBubbleTriangle
          >
            Voir les recompenses
          </BubbleButton>
        </div>
      </div>
    </section>
  );
}
