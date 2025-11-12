'use client'

import { useCallback } from "react";
import { useAutoConnect } from "thirdweb/react";
import { ecosystemWallet, type Wallet } from "thirdweb/wallets";
import { client, ecosystemWalletName, partnerId } from "../utils/thirdwebClient";

const ecosystemWalletInstance = ecosystemWallet(`ecosystem.${ecosystemWalletName}`, {
  partnerId: partnerId
});

export default function TestAutoConnect() {
  const onConnect = useCallback(
    async (wallet: Wallet) => {
      console.log("@@useAuthentication:onConnect", { 
        wallet, 
        partnerId,
        walletId: wallet.id,
        walletChain: wallet.getChain()
      });
    }, 
    []
  );

  const { isLoading: useAutoConnectLoading } = useAutoConnect({
    client,
    wallets: [ecosystemWalletInstance],
    onConnect: onConnect,
  });

  console.log("useAutoConnect loading state:", useAutoConnectLoading);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <main className="flex flex-col gap-8 items-center">
        <h1 className="text-3xl font-bold mb-4">Test Auto Connect</h1>
        <div className="bg-gray-100 p-6 rounded-lg">
          <p className="text-lg">
            Auto Connect Loading: {useAutoConnectLoading ? "true" : "false"}
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Check the browser console for debug logs
          </p>
        </div>
        <a 
          href="/" 
          className="text-blue-600 hover:underline"
        >
          Go back to home
        </a>
      </main>
    </div>
  );
}

