"use client";

import { useEffect } from "react";
import { useAccount, useWaitForTransactionReceipt } from "wagmi";

import {
  IMintTransaction,
  useEmptyMintTransactions,
  useMintTransactions,
  useRemoveMintTransaction,
} from "../atoms/mint-transactions";
import { toast } from "../ui/use-toast";

const TransactionWatcher = ({ tx }: { tx: IMintTransaction }) => {
  const removeMintTransaction = useRemoveMintTransaction();
  const { isSuccess: isConfirmed, isError } = useWaitForTransactionReceipt({
    hash: tx.hash,
  });

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
  const { isDisconnected } = useAccount();
  const transactions = useMintTransactions();
  const emptyMintTransactions = useEmptyMintTransactions();

  // remove all transactions from localStorage when account disconnects
  useEffect(() => {
    if (isDisconnected) {
      emptyMintTransactions();
    }
  }, [isDisconnected, emptyMintTransactions]);

  return (
    <>
      {transactions.map((tx) => (
        <TransactionWatcher key={tx.hash} tx={tx} />
      ))}
    </>
  );
};

export default TransactionsWatcher;
