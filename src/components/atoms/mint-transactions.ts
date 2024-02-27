import { useAtom, useSetAtom } from "jotai/react";
import { atomWithStorage } from "jotai/utils";
import { Address } from "viem";

export const MINT_TRANSACTION_STORAGE_KEY = "mint-transactions";

export interface IMintTransaction {
  hash: `0x${string}`;
  nftId: number;
  contractAddress: Address;
}

export const mintTransactions = atomWithStorage<IMintTransaction[]>(
  MINT_TRANSACTION_STORAGE_KEY,
  [],
);

export const useAddMintTransaction = () => {
  const setTransactions = useSetAtom(mintTransactions);

  return (transaction: IMintTransaction) => {
    setTransactions((prev) =>
      prev.find((tx) => tx.hash === transaction.hash)
        ? [...prev]
        : [...prev, transaction],
    );
  };
};

export const useRemoveMintTransaction = () => {
  const setTransactions = useSetAtom(mintTransactions);

  return (hash: string) => {
    setTransactions((prev) => prev.filter((t) => t.hash !== hash));
  };
};

export const useMintTransactions = () => {
  const [transactions] = useAtom(mintTransactions);

  return transactions;
};
