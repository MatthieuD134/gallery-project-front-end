"use client";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { LogOut } from "lucide-react";
import { useAccount, useDisconnect, useEnsName } from "wagmi";

import { shortenAddress } from "@/utils";

import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const ConnectButton = () => {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const { data: ensName } = useEnsName({ address });
  // const { data: ensAvatar } = useEnsAvatar({ name: ensName! });

  const { open } = useWeb3Modal();

  return (
    <>
      {!address && (
        <Button variant="link" onClick={() => open()}>
          Se Connecter
        </Button>
      )}
      {address && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="link" className="flex gap-1">
              <span className="h-4 w-4 rounded-full bg-green-600"></span>
              <span>{ensName || shortenAddress(address)}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 border-primary bg-primary text-primary-foreground">
            <Button
              onClick={() => disconnect()}
              className="flex w-full justify-between focus:bg-primary-accent focus:text-primary-foreground"
            >
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </Button>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </>
  );
};

export default ConnectButton;
