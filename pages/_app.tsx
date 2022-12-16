import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";
import type { AppProps } from "next/app";
import { Session } from "next-auth";
import { RecoilRoot } from "recoil";
import { useEffect } from "react";
import "@/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps<{ session: Session }>) {
  if (process.env.NODE_ENV === "production") {
    console.log = () => {};
  }

  return (
    <div data-theme="authello-light">
      <SessionProvider session={pageProps.session}>
        <RecoilRoot>
          <Toaster position="top-center" reverseOrder={true} />
          <Component {...pageProps} />
        </RecoilRoot>
      </SessionProvider>
    </div>
  );
}

export default MyApp;
