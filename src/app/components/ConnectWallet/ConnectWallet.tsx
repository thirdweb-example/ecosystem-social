'use client'

import { ConnectButton } from "thirdweb/react";
import { ecosystemWallet, createWallet } from "thirdweb/wallets";
import { berachain } from "thirdweb/chains";
import { client, ecosystemWalletName, partnerId } from "../../utils/thirdwebClient";

const ecosystemWalletInstance = ecosystemWallet(`ecosystem.${ecosystemWalletName}`, {
  partnerId: partnerId
});

const wallets = [
  ecosystemWalletInstance, createWallet("global.safe")
];

export function ConnectWallet() {
  return (
    <ConnectButton 
      client={client} 
      wallets={wallets} 
      chain={berachain}
      recommendedWallets={[ecosystemWalletInstance]}
      // accountAbstraction={{
      //   chain: arbitrumSepolia,
      //   gasless: true,
      // }}
    />
  );
}