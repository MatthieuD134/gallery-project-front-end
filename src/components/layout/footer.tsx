import footerIllustration from "@public/images/footer-illustration.png";
import Image from "next/image";

import { staatliches } from "@/fonts";

import { Button, LinkButton } from "../ui/button";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      <div className="relative h-40 bg-primary">
        <div className="absolute -bottom-1 left-0 right-0 top-0 bg-transition-spray-white bg-contain bg-left-bottom bg-repeat-x" />
      </div>
      <div className="bg-background">
        <div className="z-10 mx-4 my-4 flex max-w-4xl flex-col items-center justify-between gap-8 bg-background pb-20 md:mx-auto md:flex-row">
          <div className="z-[1] flex w-full flex-col gap-8 md:w-2/3">
            <div className="flex justify-center">LOGO</div>
            <p>
              Ce projet est rendu possible grâce à notre partenariat avec une
              galerie externe qui soutient les artistes en les aidant à vendre
              leurs œuvres numériques à l&apos;aide des NFTs. Nous sommes
              reconnaissants pour leur soutien et leur engagement envers la
              communauté artistique.
              <br />
              N&apos;hésitez pas à nous contacter pour toute question ou
              information supplément
            </p>
          </div>
          <div className="z-[1] flex flex-col justify-start gap-4">
            <div>SOCIALS</div>
            <nav className={`${staatliches.className} flex flex-col`}>
              <LinkButton
                variant="link"
                className="text-background-foreground w-fit pl-0 text-2xl uppercase"
                href="#hero"
              >
                L&apos;Histoire
              </LinkButton>
              <LinkButton
                variant="link"
                className=" text-background-foreground w-fit pl-0 text-2xl uppercase "
                href="#comics"
              >
                Les Comics
              </LinkButton>
              <LinkButton
                variant="link"
                className=" text-background-foreground w-fit pl-0 text-2xl uppercase"
                href="#board-games"
              >
                Jeux de Société
              </LinkButton>
              <LinkButton
                variant="link"
                className=" text-background-foreground w-fit pl-0 text-2xl uppercase"
                href="#gallery"
              >
                Galerie NFT
              </LinkButton>
              <LinkButton
                href="#artist"
                variant="link"
                className=" text-background-foreground w-fit pl-0 text-2xl uppercase"
              >
                L&apos;Artiste
              </LinkButton>
              <LinkButton
                href="#faq"
                variant="link"
                className=" text-background-foreground w-fit pl-0 text-2xl uppercase"
              >
                FAQ
              </LinkButton>
            </nav>
            <Button
              variant="link"
              className="text-background-foreground w-fit pl-0 text-lg"
            >
              Nous Contacter
            </Button>
          </div>
        </div>
      </div>
      <Image
        className="absolute -bottom-12 -right-12 opacity-50"
        src={footerIllustration}
        alt="Illustration of the comic for the footer"
      />
    </footer>
  );
};

export default Footer;
