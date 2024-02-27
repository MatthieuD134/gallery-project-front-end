import nftImage1 from "@public/images/nft-illustration-1.png";
import nftImage2 from "@public/images/nft-illustration-2.png";
import nftImage3 from "@public/images/nft-illustration-3.png";
import nftImage4 from "@public/images/nft-illustration-4.png";

import { staatliches } from "@/fonts";
import { NftInfo } from "@/interfaces";

import BuyNftCard from "../nft/buy-nft-card";
import { BubbleButton } from "../ui/button";

const NFTs: NftInfo[] = [
  {
    id: 1,
    image: nftImage1,
    name: "Couverture de john l'histoire veritable",
    price: 0.04,
  },
  {
    id: 2,
    image: nftImage2,
    name: "Couverture de john l'histoire veritable 2",
    price: 0.05,
  },
  {
    id: 3,
    image: nftImage3,
    name: "Couverture de john l'histoire veritable 3",
    price: 0.04,
  },
  {
    id: 4,
    image: nftImage4,
    name: "Couverture de john l'histoire veritable 4",
    price: 0.03,
  },
];

export default function GalleryNFT() {
  return (
    <section id="gallery">
      <div className="flex flex-col items-center bg-tertiary px-2 text-tertiary-foreground">
        <div className="flex max-w-4xl flex-col items-center p-2">
          <h2
            className={`${staatliches.className} text-balance text-6xl uppercase`}
          >
            Galerie NFT
          </h2>
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
            <BuyNftCard nftInfo={nftInfo} key={nftInfo.id} />
          ))}
        </div>
        <div className="z-10 flex justify-center">
          <BubbleButton
            className={`${staatliches.className} mx-4 w-fit p-8 text-2xl uppercase`}
            variant="accent"
            invertBubbleTriangle
          >
            Voir les recompenses
          </BubbleButton>
        </div>
      </div>
    </section>
  );
}
