import { useEffect, useState } from "react";
import Head from "next/head";
import { LayoutGroup } from "framer-motion"
import Loader from "../components/Loader.jsx";
import Cursor from "../components/Cursor.jsx";
import "../../styles/index.scss";

const MyApp = ({ Component, pageProps }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
    document.getElementById("__next").classList.add("fade-in");

    let DocumentNameChange = () => {
      let PageName = document.title;
      document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "visible") {
         document.title = PageName;
        } else {
         document.title = "Come back 😥";
       }
      });
    }

    let currentUrl = location.href;
    setInterval(() => {
      if (location.href !== currentUrl) {
        currentUrl = location.href;
        DocumentNameChange();
      }
    }, 1000);
  }, []);
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
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
        <link
          rel="alternate"
          type="text/html"
          hrefLang="en"
          href="https://florianhoudu.fr/en"
          title="Français"
        />
      </Head>
      {!loading ? (
        <LayoutGroup>
          <Component {...pageProps} />
          <Cursor />
        </LayoutGroup>
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
