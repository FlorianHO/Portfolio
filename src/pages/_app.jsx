import { useEffect, useState, useRef } from "react";
import Head from "next/head";
import { LayoutGroup } from "framer-motion"
import Loader from "../components/Loader.jsx";
import Cursor from "../components/Cursor.jsx";
import "../../styles/index.scss";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  // setLoading(true);
 
  useEffect(() => {
    setLoading(false);
    document.getElementById("__next").classList.add("fade-in");
    let lastUrl = location.href; 
    new MutationObserver(() => {
      const url = location.href;
      if (url !== lastUrl) {
        lastUrl = url;
        ChangedPage();
      }
    }).observe(document, {subtree: true, childList: true});

    const ChangedPage = () => {
      let PageName = document.title;
      console.log(PageName)
      document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "visible") {
          document.title = PageName;
        } else {
          document.title = "Come back 😥";
        }
      });
    }
    
    window.addEventListener("load", () => {
    
    });
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
