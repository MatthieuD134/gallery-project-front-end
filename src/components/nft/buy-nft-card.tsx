import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";

import { staatliches } from "@/fonts";
import { NftInfo } from "@/interfaces";

import MintNFTButton from "../shared/mint-nft-button";
import { Button } from "../ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";

const getEthPriceInEur = async (): Promise<number> => {
  try {
    const { data } = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&ids=ethereum",
    );
    return data[0].current_price as number;
  } catch (e) {
    throw new Error("Cannot fetch Eth price");
  }
};

const BuyNftCard = ({ nftInfo }: { nftInfo: NftInfo }) => {
  // fetch price of nft in euro
  const { data: ethPrice } = useQuery({
    queryKey: ["eth_price"],
    refetchInterval: 60_000,
    refetchIntervalInBackground: true,
    queryFn: getEthPriceInEur,
  });

  return (
    <div
      key={nftInfo.id}
      className="relative col-span-1 flex flex-col items-center"
    >
      <span className="w-full">
        <Image
          src={nftInfo.image}
          alt={`illustration for nft - ${nftInfo.name}`}
        />
      </span>
      <div className="mb-8 mt-4 flex flex-col items-center gap-4">
        <h3
          className={`${staatliches.className} line-clamp-2 text-xl uppercase`}
        >
          {nftInfo.name}
        </h3>
        <div className="flex w-full flex-row items-center justify-between">
          <span>{nftInfo.price} ETH</span>
          <span className="text-sm opacity-50">
            ~{" "}
            {ethPrice
              ? parseFloat((ethPrice * nftInfo.price).toString()).toFixed(2)
              : "-"}{" "}
            €
          </span>
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button
                variant="ghost"
                className="m-0 h-6 w-6 rounded-full border p-0 text-center font-semibold text-tertiary-foreground hover:text-tertiary-foreground"
              >
                ?
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="text-primary">
              Information sur le prix en ETH
            </HoverCardContent>
          </HoverCard>
        </div>
        <MintNFTButton
          className={`${staatliches.className} w-full text-xl uppercase`}
          variant="secondary"
          nftId={nftInfo.id}
          nftPrice={nftInfo.price}
        />
      </div>
    </div>
  );
};

export default BuyNftCard;
