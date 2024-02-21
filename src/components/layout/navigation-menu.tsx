import Link from "next/link";

import HamburgerMenu from "../icons/hamburger-menu";
import ConnectButton from "../shared/connect-button";
import { Button } from "../ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "../ui/drawer";

const NavigationMenu = () => {
  return (
    <nav className="sticky right-2 top-2 z-20 float-right flex flex-row justify-end gap-2">
      <ConnectButton />
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="ghost">
            <HamburgerMenu />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="rounded-none border-none bg-primary text-primary-foreground">
          <nav className="mx-auto mt-4 flex min-h-[50svh] flex-col justify-center gap-8 align-middle">
            <DrawerClose>
              <Button variant="link" className="text-2xl uppercase" asChild>
                <Link href="#hero">L&apos;Histoire</Link>
              </Button>
            </DrawerClose>
            <Button variant="link" className="text-2xl uppercase" asChild>
              <Link href="#comics">Les Comics</Link>
            </Button>
            <Button variant="link" className="text-2xl uppercase" asChild>
              <Link href="#board-games">Jeux de Société</Link>
            </Button>
            <Button variant="link" className="text-2xl uppercase" asChild>
              <Link href="#gallery">Galerie NFT</Link>
            </Button>
            <Button variant="link" className="text-2xl uppercase" asChild>
              <Link href="#artist">L&apos;Artiste</Link>
            </Button>
            <Button variant="link" className="text-2xl uppercase" asChild>
              <Link href="#faq">FAQ</Link>
            </Button>
          </nav>
        </DrawerContent>
      </Drawer>
    </nav>
  );
};

export default NavigationMenu;
