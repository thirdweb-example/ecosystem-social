import { createThirdwebClient } from "thirdweb";
import { setThirdwebDomains } from "thirdweb/utils";

export const ecosystemWalletName = process.env.NEXT_PUBLIC_ECOSYSTEM_WALLET_NAME || "";
export const partnerId = process.env.NEXT_PUBLIC_PARTNER_ID || "";

setThirdwebDomains({
  rpc: "rpc.thirdweb-dev.com",
  inAppWallet: "embedded-wallet.thirdweb-dev.com",
  storage: "storage.thirdweb-dev.com",
  bundler: "bundler.thirdweb-dev.com",
  pay: "pay.thirdweb-dev.com",
  insight: "insight.thirdweb-dev.com",
  analytics: "c.thirdweb-dev.com",
  social: "social.thirdweb-dev.com",
  bridge: "bridge.thirdweb-dev.com",
  engineCloud: "engine.thirdweb-dev.com",
});

export const client = createThirdwebClient({
  clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID as string,
});