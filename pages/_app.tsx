import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";
import type { AppProps } from "next/app";
import { Session } from "next-auth";
import { RecoilRoot } from "recoil";
import { useEffect } from "react";
import "@/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps<{}>) {
  if (process.env.NODE_ENV === "production") {
    console.log = () => {};
  }

  return (
    <div>
      <RecoilRoot>
        <Toaster position="top-center" reverseOrder={true} />
        <Component {...pageProps} />
      </RecoilRoot>
    </div>
  );
}

export default MyApp;
