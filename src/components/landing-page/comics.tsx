import comicsIllustration from "@public/images/about-comics.png";
import Image from "next/image";

import { staatliches } from "@/fonts";

import { BubbleButton } from "../ui/button";

export default function Comics() {
  return (
    <section id="comics">
      <div className="grid grid-cols-1 items-center bg-background text-foreground md:grid-cols-12 md:pt-20">
        <div className="flex justify-start md:col-span-5 md:justify-end">
          <div className="max-w-xl ">
            <Image src={comicsIllustration} alt="illustration of the comic" />
          </div>
        </div>
        <div className="flex justify-start md:col-span-7">
          <div className="max-w-3xl p-2">
            <h2
              className={`${staatliches.className} text-balance text-6xl uppercase`}
            >
              Présentation des comics
            </h2>
            <p className="my-8 max-w-2xl text-lg">
              Découvrez nos Comics captivants ! Plongez dans des récits épiques,
              des personnages saisissants et des aventures incroyables qui vous
              tiendront en haleine à chaque page. Nos bandes dessinées sont un
              mélange passionnant d&apos;histoire alternative et de super-héros,
              qui vous emmèneront dans un voyage à travers le temps et
              l&apos;espace.
              <br /> Explorez des mondes fantastiques, des batailles épiques et
              des enjeux palpitants. Nos personnages sont vibrants et complexes,
              et vous vous attacherez à eux dès les premières pages.
              Rejoignez-nous dans cette aventure inoubliable !
            </p>
            <div className="flex justify-end">
              <BubbleButton
                className={`${staatliches.className} mx-4 w-fit p-8 text-2xl uppercase`}
                variant="tertiary"
                invertBubbleTriangle
              >
                Voir le projet!
              </BubbleButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
