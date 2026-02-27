'use client'

import { inAppWallet } from "thirdweb/wallets";
import { useConnect, useActiveAccount, useDisconnect, useActiveWallet } from "thirdweb/react";
import { shortenAddress } from "thirdweb/utils";
import { client } from "../../utils/thirdwebClient";

interface GoogleSignInButtonProps {
  mode?: "redirect" | "popup";
}

export function GoogleSignInButton({ mode = "redirect" }: GoogleSignInButtonProps) {
  const { connect, isConnecting } = useConnect();
  const { disconnect } = useDisconnect();
  const account = useActiveAccount();
  const wallet = useActiveWallet();

  if (account) {
    return (
      <div className="flex flex-col gap-2 items-center p-4 bg-gray-100 rounded-lg">
        <p className="text-sm">Connected: {shortenAddress(account.address)}</p>
        <button 
          onClick={() => wallet && disconnect(wallet)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        >
          Disconnect
        </button>
      </div>
    );
  }

  return (
    <button
      disabled={isConnecting}
      onClick={() =>
        connect(async () => {
          const wallet = inAppWallet({
            auth: {
              options: ["google"],
              mode,
            },
          });
          await wallet.connect({ client, strategy: "google" });
          return wallet;
        })
      }
      className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
    >
      {isConnecting ? "Connecting..." : "Connect with Google"}
    </button>
  );
}
