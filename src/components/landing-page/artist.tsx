import artistIllustration from "@public/images/artist.png";
import Image from "next/image";

import { staatliches } from "@/fonts";

import { BubbleButton } from "../ui/button";

export default function Artist() {
  return (
    <section id="artist">
      <div className="relative h-80 bg-tertiary">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-transition-paint-white bg-contain bg-left-bottom bg-repeat-x" />
      </div>
      <div className="grid grid-cols-1 items-center bg-background text-foreground md:grid-cols-12 md:py-20">
        <div className="flex justify-start md:col-span-5 md:justify-end">
          <div className="max-w-xl ">
            <Image src={artistIllustration} alt="illustration of the artist" />
          </div>
        </div>
        <div className="flex justify-start md:col-span-7">
          <div className="max-w-3xl p-2">
            <h2
              className={`${staatliches.className} text-balance text-6xl uppercase`}
            >
              Présentation de l&apos;Artiste
            </h2>
            <p className="my-8 max-w-2xl text-lg">
              Découvrez l&apos;esprit créatif derrière ces mondes fantastiques!
              Notre artiste talentueux a une passion inébranlable pour la
              narration visuelle et l&apos;art. Avec plus de 20 ans
              d&apos;expérience, il a su captiver les cœurs et les esprits des
              fans du monde entier.
              <br />
              Son talent exceptionnel pour créer des personnages uniques et des
              mondes imaginatifs a fait de lui un artiste incontournable dans le
              domaine des comics et des jeux de société. Nous sommes fiers de
              collaborer avec lui pour donner vie à nos aventures incroyables.
              Découvrez-en plus sur l&apos;artiste derrière les Comics et les
              jeux qui vous passionnent tant !
            </p>
            <div className="flex justify-end">
              <BubbleButton
                className={`${staatliches.className} mx-4 w-fit p-8 text-2xl uppercase`}
                variant="tertiary"
                invertBubbleTriangle
              >
                En apprendre plus
              </BubbleButton>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-80 bg-primary">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-transition-paint-white-inverted bg-contain bg-left-top bg-repeat-x" />
      </div>
    </section>
  );
}
