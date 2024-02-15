import HamburgerMenu from "../icons/hamburger-menu";
import { Button } from "../ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "../ui/drawer";

const NavigationMenu = () => {
  return (
    <nav className="sticky right-2 top-2 z-20 float-right flex flex-row justify-end gap-4">
      <Button>Se Connecter</Button>
      <Drawer>
        <DrawerTrigger>
          <Button variant="ghost">
            <HamburgerMenu />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="rounded-none border-none bg-primary text-primary-foreground">
          <nav className="mx-auto mt-4 flex min-h-[50svh] flex-col justify-center gap-8 align-middle">
            <Button variant="link" className="text-2xl uppercase">
              L&apos;Histoire
            </Button>
            <Button variant="link" className="text-2xl uppercase">
              Les Comics
            </Button>
            <Button variant="link" className="text-2xl uppercase">
              Jeux de Société
            </Button>
            <Button variant="link" className="text-2xl uppercase">
              Galerie NFT
            </Button>
            <Button variant="link" className="text-2xl uppercase">
              L&apos;Artiste
            </Button>
            <Button variant="link" className="text-2xl uppercase">
              FAQ
            </Button>
          </nav>
        </DrawerContent>
      </Drawer>
    </nav>
  );
};

export default NavigationMenu;
