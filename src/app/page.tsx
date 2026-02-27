import { ConnectWallet } from "./components/ConnectWallet/ConnectWallet";
import { GoogleSignInButton } from "./components/GoogleSignIn/GoogleSignIn";
// import { ClaimNFT } from "./components/ClaimNFT/ClaimNFT";
// import { LinkXProfile } from "./components/LinkXProfile/LinkXProfile";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <main className="flex flex-col gap-8 items-center">
        <h1 className="text-3xl font-bold mb-4">Connect Tester App</h1>
        <div className="flex flex-col gap-4 items-center">
          <ConnectWallet />
          <GoogleSignInButton mode="popup"/>
        {/*  <ClaimNFT  /> */}
        {/* <LinkXProfile /> */}
        </div>
        <a 
          href="/test-autoconnect" 
          className="text-blue-600 hover:underline text-lg mt-4"
        >
          Test Auto Connect →
        </a>
      </main>
    </div>
  );
}
