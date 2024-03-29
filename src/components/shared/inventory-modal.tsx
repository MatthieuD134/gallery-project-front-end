"use client";

import { Loader2 } from "lucide-react";

import useCurrentUserNFTs from "@/hooks/use-current-user-nfts";
import useMediaQuery from "@/hooks/use-media-query";

import { useOpenInventoryModal } from "../atoms/open-inventory-modal.atom";
import NftList from "../nft/nft-list";
import { Dialog, DialogContent } from "../ui/dialog";
import { Drawer, DrawerContent } from "../ui/drawer";

export const InventoryModal = () => {
  const {
    isOpen,
    close: closeModal,
    open: openModal,
  } = useOpenInventoryModal();
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const { data: currentUserNFTs, isFetching } = useCurrentUserNFTs();

  if (isDesktop) {
    return (
      <Dialog
        open={isOpen}
        onOpenChange={(open) => (open ? openModal() : closeModal())}
      >
        <DialogContent className="w-3/4 max-w-4xl border-primary bg-primary px-2 text-primary-foreground">
          <div className="mb-2 mt-5">
            {isFetching && (
              <div>
                <p className="w-full text-center opacity-20">
                  Chargement de l&apos;inventaire
                </p>
                <Loader2 size={32} className="mx-auto my-4 animate-spin" />
              </div>
            )}
            {!isFetching && (
              <NftList nfts={currentUserNFTs?.data.ownedNfts || []} />
            )}
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer
      open={isOpen}
      onOpenChange={(open) => (open ? openModal() : closeModal())}
    >
      <DrawerContent className="border-primary bg-primary px-0 text-primary-foreground">
        <div className="my-5 max-h-[60svh] overflow-y-scroll px-4">
          {isFetching && (
            <div>
              <p className="w-full text-center opacity-20">
                Chargement de l&apos;inventaire
              </p>
              <Loader2 size={32} className="mx-auto my-4 animate-spin" />
            </div>
          )}
          {!isFetching && (
            <NftList nfts={currentUserNFTs?.data.ownedNfts || []} />
          )}
        </div>
      </DrawerContent>
    </Drawer>
  );
};
