"use client";

import { useCallback } from "react";
import { useAccount, useSignMessage } from "wagmi";

const useSignDarkblockAccessAuth = () => {
  const { address } = useAccount();
  const { signMessage, ...rest } = useSignMessage();

  const signDarkblockAccessToken = useCallback(async () => {
    const timestamp = Date.now();
    const msgParams = `You are unlocking content via the Darkblock Protocol.\n\nPlease sign to authenticate.\n\nThis request will not trigger a blockchain transaction or cost any fee.\n\nAuthentication Token: ${timestamp}${address}`;

    signMessage({
      account: address,
      message: msgParams,
    });
  }, [address, signMessage]);

  return { signMessage: signDarkblockAccessToken, ...rest };
};

export default useSignDarkblockAccessAuth;
