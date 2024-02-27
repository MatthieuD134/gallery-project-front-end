import { Loader2 } from "lucide-react";

import { useMintTransactions } from "../atoms/mint-transactions";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const TransactionNotifications = () => {
  const transactions = useMintTransactions();

  if (transactions.length === 0) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="h-4 w-4 rounded-full border border-primary-foreground p-3 text-primary-foreground hover:text-primary-foreground focus:text-primary-foreground"
          variant="ghost"
        >
          {transactions.length}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="border-primary bg-primary text-primary-foreground">
        <DropdownMenuLabel>Transactions en cours</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {transactions.map((tx) => (
          <div key={tx.hash} className="m-2 flex justify-between text-xs">
            Achat du modèle #{tx.nftId}
            <Loader2 size={16} className="animate-spin" />
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TransactionNotifications;
