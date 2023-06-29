import "@/styles/globals.css";
import "@/styles/CustomCalendar.css";
import "@/styles/CustomFaq.css";

import { UserProvider } from "@auth0/nextjs-auth0/client";
import type { AppProps } from "next/app";
import Layout from "@/components/ui/Layout";
import Head from "next/head";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <UserProvider>
        <Head>
          <title>すかいらーくの予約|予約確認ページ</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserProvider>
    </RecoilRoot>
  );
}
