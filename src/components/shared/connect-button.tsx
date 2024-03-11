"use client";
import { useQuery } from "@tanstack/react-query";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { OwnedNftsResponse } from "alchemy-sdk";
import axios, { AxiosResponse } from "axios";
import { Loader2, LogOut, WalletCards } from "lucide-react";
import { useAccount, useBalance, useDisconnect, useEnsName } from "wagmi";

import { shortenAddress } from "@/utils";

import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const ConnectButton = () => {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const { data: ensName } = useEnsName({ address });
  const { data: balance } = useBalance({
    address,
  });

  const { open } = useWeb3Modal();

  const { data: nftInventory, isFetching } = useQuery<
    AxiosResponse<OwnedNftsResponse>
  >({
    queryKey: ["nfts", address],
    queryFn: () => axios.get(`/api/user/${address}/nfts`),
    enabled: !!address,
  });

  return (
    <>
      {!address && (
        <Button variant="link" onClick={() => open()}>
          Se Connecter
        </Button>
      )}
      {address && (
        <div className="flex gap-2 align-middle">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="link" className="flex gap-1 p-0">
                <span className="h-4 w-4 rounded-full bg-green-600"></span>
                <span>{ensName || shortenAddress(address)}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 border-primary bg-primary text-primary-foreground">
              <DropdownMenuLabel className="flex w-full justify-between focus:bg-primary-accent focus:text-primary-foreground">
                <span className="font-normal text-primary-foreground/75">
                  Balance:
                </span>
                <span>
                  {balance
                    ? parseFloat(
                        (
                          Number(balance.value) /
                          10 ** balance.decimals
                        ).toString(),
                      ).toFixed(2)
                    : "-"}{" "}
                  ETH
                </span>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <Button
                onClick={() => disconnect()}
                className="flex w-full justify-between focus:bg-primary-accent focus:text-primary-foreground"
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </Button>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            variant="ghost"
            className="relative flex justify-center gap-1 border-2 border-solid border-transparent p-2 align-middle text-white hover:border-white hover:text-white focus:border-white focus:text-white"
          >
            {isFetching ? (
              <Loader2 size={16} className="animate-spin" />
            ) : (
              <span>{nftInventory?.data.totalCount}</span>
            )}
            <WalletCards />
          </Button>
        </div>
      )}
    </>
  );
};

export default ConnectButton;
