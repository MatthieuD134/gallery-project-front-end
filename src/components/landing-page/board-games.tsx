import boardgamesIllustration from "@public/images/about-boardgames.png";
import Image from "next/image";

import { staatliches } from "@/fonts";

import { BubbleButton } from "../ui/button";

export default function BoardGames() {
  return (
    <section id="board-games">
      <div className="relative h-80 bg-background">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-transition-spray-black bg-contain bg-left-bottom bg-repeat-x" />
      </div>
      <div className="grid grid-cols-1 items-center bg-primary text-primary-foreground md:grid-cols-12 md:py-20">
        <div className="flex justify-end md:col-span-7">
          <div className="flex max-w-3xl flex-col p-2 ">
            <h2
              className={`${staatliches.className} text-balance text-6xl uppercase`}
            >
              Jeux de société
            </h2>
            <p className="my-8 text-lg">
              Plongez dans l&apos;univers des Comics avec nos jeux de société
              passionnants ! Ces jeux vous transporteront dans le même univers
              que nos bandes dessinées, vous permettant de vivre des aventures
              uniques avec vos amis et votre famille.
              <br /> Chaque jeu est conçu avec soin et comporte des mécanismes
              de jeu captivants qui vous tiendront en haleine pendant des
              heures. Préparez-vous à affronter des défis, à prendre des
              décisions stratégiques et à vivre des moments de pure excitation.
              Découvrez nos jeux de société dès maintenant !
            </p>
            <BubbleButton
              className={`${staatliches.className} mx-4 w-fit p-8 text-2xl uppercase`}
              variant="secondary"
            >
              Voir le projet!
            </BubbleButton>
          </div>
        </div>
        <div className="flex justify-start md:col-span-5">
          <div className="max-w-xl ">
            <Image
              src={boardgamesIllustration}
              alt="illustration of the boardgames"
            />
          </div>
        </div>
      </div>
      <div className="relative h-80 bg-tertiary">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-transition-spray-black-inverted bg-contain bg-left-top bg-repeat-x" />
      </div>
    </section>
  );
}
