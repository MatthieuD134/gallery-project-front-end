"use client";

import { useEffect, useState } from "react";

import { staatliches } from "@/fonts";

import HamburgerMenu from "../icons/hamburger-menu";
import ConnectButton from "../shared/connect-button";
import { Button, LinkButton } from "../ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "../ui/drawer";

const NavigationMenu = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const checkScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 z-20 float-left flex w-full flex-row justify-end gap-2 p-2 transition-all duration-500 ${
        isScrolled && "bg-primary"
      }`}
    >
      <ConnectButton />
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="ghost">
            <HamburgerMenu />
          </Button>
        </DrawerTrigger>
        <DrawerContent
          className="rounded-none border-none bg-primary text-primary-foreground"
          showTransition
        >
          <nav
            className={`${staatliches.className} mx-auto mt-4 flex min-h-[50svh] flex-col justify-center gap-8 align-middle`}
          >
            <DrawerClose asChild>
              <LinkButton
                variant="link"
                className="text-4xl uppercase"
                href="#hero"
              >
                L&apos;Histoire
              </LinkButton>
            </DrawerClose>
            <DrawerClose asChild>
              <LinkButton
                variant="link"
                className="text-4xl uppercase"
                href="#comics"
              >
                Les Comics
              </LinkButton>
            </DrawerClose>
            <DrawerClose asChild>
              <LinkButton
                variant="link"
                className="text-4xl uppercase"
                href="#board-games"
              >
                Jeux de Société
              </LinkButton>
            </DrawerClose>
            <DrawerClose asChild>
              <LinkButton
                variant="link"
                className="text-4xl uppercase"
                href="#gallery"
              >
                Galerie NFT
              </LinkButton>
            </DrawerClose>
            <DrawerClose asChild>
              <LinkButton
                href="#artist"
                variant="link"
                className="text-4xl uppercase"
              >
                L&apos;Artiste
              </LinkButton>
            </DrawerClose>
            <DrawerClose asChild>
              <LinkButton
                href="#faq"
                variant="link"
                className="text-4xl uppercase"
              >
                FAQ
              </LinkButton>
            </DrawerClose>
          </nav>
        </DrawerContent>
      </Drawer>
    </nav>
  );
};

export default NavigationMenu;
