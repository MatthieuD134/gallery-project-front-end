import { useAtom } from "jotai/react";
import { atom } from "jotai/vanilla";
import { useCallback } from "react";

export const openInventoryModal = atom(false);

export const useOpenInventoryModal = () => {
  const [isOpen, setOpen] = useAtom(openInventoryModal);

  const open = useCallback(() => setOpen(true), [setOpen]);
  const close = useCallback(() => setOpen(false), [setOpen]);

  return { isOpen, open, close };
};
