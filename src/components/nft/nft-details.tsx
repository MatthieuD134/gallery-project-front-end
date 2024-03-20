import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { OwnedNft } from "alchemy-sdk";
import fileDownload from "js-file-download";
import {
  ArrowLeft,
  BookText,
  Download,
  EllipsisVertical,
  Info,
  Loader2,
  LockKeyhole,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

import { GALLERY_NFT_ADDRESS } from "@/constants";
import useDarkblockInfo from "@/hooks/use-darkblock-info";
import useDarkblockProxy from "@/hooks/use-darkblock-proxy";
import useSignDarkblockAccessAuth from "@/hooks/use-sign-darkblock-access-auth";
import { IDarkblockInfo } from "@/services/queries";
import formatBytes from "@/utils/format-bytes";

import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Skeleton } from "../ui/skeleton";

const UnlockableRow = ({
  nft,
  dbstack,
  sessionToken,
}: {
  nft: OwnedNft;
  dbstack: IDarkblockInfo;
  sessionToken?: string;
}) => {
  const { address } = useAccount();
  const { data: proxyData } = useDarkblockProxy(
    dbstack?.tags.find((tag) => tag.name === "ArtId")?.value,
    sessionToken,
    nft.tokenId,
    GALLERY_NFT_ADDRESS,
    address,
  );

  const handleDownload = () => {
    if (proxyData) {
      fileDownload(
        proxyData.data,
        dbstack.tags.find((tag) => tag.name === "Name")?.value || "contenu",
      );
    }
  };

  return (
    <tr key={dbstack.id} className="border-b border-t border-gray-500">
      <td className="w-9/12 py-2">
        <Button
          className="flex flex-row items-center gap-2"
          onClick={() => {
            console.log("click");
          }}
        >
          <BookText size={16} />
          {dbstack.tags.find((tag) => tag.name === "Name")?.value}
        </Button>
      </td>
      <td className="w-2/12 py-2">
        <div className="flex flex-row items-center justify-end text-xs">
          {formatBytes(dbstack.data.size)}
        </div>
      </td>
      <td className="w-1/12 py-2">
        <div className="flex flex-row items-center justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <EllipsisVertical />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 border-primary bg-primary text-primary-foreground">
              <DropdownMenuItem>
                <Button className="flex w-full flex-row items-center justify-start gap-2">
                  <Info size={16} />
                  <span>Details</span>
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button
                  disabled={!proxyData}
                  className="flex w-full flex-row items-center justify-start gap-2"
                  onClick={() => {
                    handleDownload();
                  }}
                >
                  {!proxyData ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : (
                    <Download size={16} />
                  )}
                  <span>Télécharger</span>
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </td>
    </tr>
  );
};

const NftDetails = ({
  nft,
  onClose,
}: {
  nft: OwnedNft;
  onClose: () => void;
}) => {
  const [sessionToken, setSessionToken] = useState<string | undefined>(
    undefined,
  );
  const {
    data: signature,
    epoch,
    signMessage,
    isPending: isSigningMessage,
  } = useSignDarkblockAccessAuth();
  const { data: darkblockInfo, isLoading: isFetchingDarkblockInfo } =
    useDarkblockInfo(GALLERY_NFT_ADDRESS, nft.tokenId);

  // Set the session Token whenever the darkblock info is fetched and the signature is available
  useEffect(() => {
    if (signature && epoch) {
      setSessionToken(`${epoch}_${signature}`);
    }
  }, [signature, epoch]);

  return (
    <div>
      <Button
        className="absolute left-2 top-2 flex text-gray-500"
        onClick={onClose}
      >
        <ArrowLeft /> Retour
      </Button>
      <div className="mt-4 flex flex-col items-center justify-between gap-4 md:mx-2 md:flex-row md:items-start">
        <div className="relative aspect-[3/4] w-1/3 flex-shrink-0 overflow-hidden">
          <Image
            src={nft.image.originalUrl || ""}
            alt={`Illustration of the NFT ${nft.tokenId}`}
            layout="fill"
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="flex flex-col justify-between gap-2 text-sm md:gap-4">
          <div className="flex gap-10">
            <div className="flex flex-col gap-0">
              <div className="text-xs text-gray-500">Nom</div>
              <div>{nft.name}</div>
            </div>

            <div className="flex flex-col gap-0">
              <div className="text-xs text-gray-500">Id</div>
              <div>#{nft.tokenId}</div>
            </div>
          </div>

          <div className="flex flex-grow-0 basis-3/5 flex-col gap-0">
            <div className="text-xs text-gray-500">Description</div>
            <div className="line-clamp-3 w-full">{nft.description}</div>
          </div>

          <div className="flex flex-grow-0 basis-2/3 flex-col gap-1">
            <div className="text-xs text-gray-500">Attributs</div>
            <div className="flex flex-wrap gap-1">
              {nft.raw.metadata.attributes.map(
                (attr: { trait_type: string; value: string | number }) => (
                  <Badge
                    key={attr.trait_type}
                    variant="secondary"
                    className="flex gap-2"
                  >
                    <span className="opacity-50">{attr.trait_type}</span>
                    <span>{attr.value}</span>
                  </Badge>
                ),
              )}
            </div>
          </div>

          <div className="flex flex-col">
            <div className="text-xs text-gray-500">Fichiers</div>
            <div className="relative h-40">
              <table className="mt-2 max-h-full w-full table-auto border-collapse overflow-auto rounded">
                <tbody>
                  {isFetchingDarkblockInfo && (
                    <>
                      <tr className="border-b border-t border-gray-500">
                        <td className="w-9/12 py-2">
                          <div className="flex flex-row items-center gap-2">
                            <BookText size={16} />
                            <Skeleton className="h-[20px] w-1/2 rounded" />
                          </div>
                        </td>
                        <td className="w-2/12 py-2">
                          <div className="flex flex-row items-center justify-end">
                            <Skeleton className="h-[20px] w-1/2 rounded" />
                          </div>
                        </td>
                        <td className="w-1/12 py-2">
                          <div className="flex flex-row items-center justify-end">
                            <Skeleton className="h-[20px] w-[20px] rounded" />
                          </div>
                        </td>
                      </tr>
                    </>
                  )}
                  {darkblockInfo?.data.dbstack.map((dbstack) => (
                    <UnlockableRow
                      key={dbstack.id}
                      nft={nft}
                      dbstack={dbstack}
                      sessionToken={sessionToken}
                    />
                  ))}
                </tbody>
              </table>
              {!sessionToken && (
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-primary/50">
                  <div className="flex flex-col items-center gap-2 bg-primary p-4">
                    {isSigningMessage ? (
                      <Loader2 size={32} className="animate-spin" />
                    ) : (
                      <LockKeyhole size={32} />
                    )}
                    <span className="text-center">
                      Ce NFT possède des fichiers auxquels seul le propriétaire
                      peut acceder
                    </span>
                    <Button
                      variant="tertiary"
                      onClick={() => signMessage()}
                      disabled={isSigningMessage}
                    >
                      {isSigningMessage || (signature && !sessionToken)
                        ? "Veuillez signer le message"
                        : "Acceder aux fichiers"}
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* <Button
            variant="tertiary"
            onClick={() => signMessage()}
            disabled={isPending}
          >
            {isPending ? "En train de signer le message..." : "Lire le comic"}
          </Button> */}
        </div>
      </div>
    </div>
  );
};

export default NftDetails;
