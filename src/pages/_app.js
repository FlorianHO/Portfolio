import { useEffect, useState } from "react";
import Head from "next/head";
import Loader from "../components/Loader";
import Cursor from "../components/Cursor";
import "../../styles/index.scss";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
    document.getElementById("__next").classList.add("fade-in");
    let test = document.title;
    const DocumentName = () => {
      if (document.visibilityState === "visible") {
        document.title = test;
      } else {
        document.title = "Come back 😥";
      }
    };

    document.addEventListener("visibilitychange", DocumentName);
  }, []);
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="robots" content="INDEX,FOLLOW" />
        <meta name="theme-color" content="#181920" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="alternate"
          type="text/html"
          hrefLang="fr"
          href="https://florianhoudu.fr/"
          title="Français"
        />
      </Head>
      {!loading ? (
        <>
          <Component {...pageProps} />
          <Cursor />
        </>
      ) : (
        <>
          <Head>
            <link rel="icon" href="/sablier.png" />
            <title>Loading... ⌛</title>
          </Head>
          <Loader />
        </>
      )}
    </>
  );
}

export default MyApp;
