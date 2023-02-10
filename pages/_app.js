// import Layout from "../components/Layout";
import Head from "next/head";
import "./globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="theme-color" content="#c4007c" />
        <title>Jajan STM</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
