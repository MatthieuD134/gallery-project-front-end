"use client";

import { useEffect } from "react";
import { useWaitForTransactionReceipt } from "wagmi";

import {
  IMintTransaction,
  useMintTransactions,
  useRemoveMintTransaction,
} from "../atoms/mint-transactions";
import { toast } from "../ui/use-toast";

const TransactionWatcher = ({ tx }: { tx: IMintTransaction }) => {
  const removeMintTransaction = useRemoveMintTransaction();
  const {
    isSuccess: isConfirmed,
    isPending,
    isError,
  } = useWaitForTransactionReceipt({
    hash: tx.hash,
  });

  console.log(`${tx.hash} isConfirmed: ${isConfirmed}`);
  console.log(`${tx.hash} isPending: ${isPending}`);
  console.log(`${tx.hash} isError: ${isError}`);

  useEffect(() => {
    if (isConfirmed || isError) {
      toast({
        title: `NFT minté avec succès`,
        description: `Vous venez d'acheter le modèle #${tx.nftId}, vous pouvez maintenant retrouver votre NFT dans votre portefeuille.`,
      });
      removeMintTransaction(tx.hash);
    }
  }, [isConfirmed, isError, removeMintTransaction, tx]);

  return <></>;
};

const TransactionsWatcher = () => {
  const transactions = useMintTransactions();

  return (
    <>
      {transactions.map((tx) => (
        <TransactionWatcher key={tx.hash} tx={tx} />
      ))}
    </>
  );
};

export default TransactionsWatcher;
