'use client'

import { ConnectButton } from "thirdweb/react";
import { ecosystemWallet } from "thirdweb/wallets";
import { arbitrumSepolia } from "thirdweb/chains";
import { client, ecosystemWalletName, partnerId } from "../../utils/thirdwebClient";

const ecosystemWalletInstance = ecosystemWallet(`ecosystem.${ecosystemWalletName}`, {
  partnerId: partnerId
});

const wallets = [
  ecosystemWalletInstance
];

export function ConnectWallet() {
  return (
    <ConnectButton 
      client={client} 
      wallets={wallets} 
      chain={arbitrumSepolia}
      recommendedWallets={[ecosystemWalletInstance]}
      // accountAbstraction={{
      //   chain: arbitrumSepolia,
      //   gasless: true,
      // }}
    />
  );
}