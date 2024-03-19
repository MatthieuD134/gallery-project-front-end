"use client";

import { useCallback, useState } from "react";
import { useAccount, useSignMessage } from "wagmi";

const useSignDarkblockAccessAuth = () => {
  const { address } = useAccount();
  const { signMessage, ...rest } = useSignMessage();
  const [epoch, setEpoch] = useState<number | null>(null);
  const platform =
    process.env.NEXT_PUBLIC_CHAIN_ID === "polygon"
      ? "Polygon"
      : "Polygon-Mumbai";

  const signDarkblockAccessToken = useCallback(async () => {
    const timestamp = Date.now();
    setEpoch(timestamp);
    const msgParams = `You are unlocking content via the Darkblock Protocol.\n\nPlease sign to authenticate.\n\nThis request will not trigger a blockchain transaction or cost any fee.\n\nAuthentication Token: ${timestamp}${address?.toLowerCase()}`;

    signMessage({
      account: address,
      message: msgParams,
    });
  }, [address, signMessage]);

  return { signMessage: signDarkblockAccessToken, epoch, platform, ...rest };
};

export default useSignDarkblockAccessAuth;
