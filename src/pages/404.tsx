import Head from "next/head";
import { useRouter } from "next/router";
import fr from "../content/Fr.jsx";
import en from "../content/En.jsx";

const Error404 = () => {
  const router = useRouter();
  const { locale } = router;
  const language = locale === "fr" ? fr : en;
  return (
    <>
      <Head>
        <title>{language.error404[0]}</title>
        <meta
          name="description"
          content={language.error404[1]}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main id="error404">
        <h1>{language.error404[2]}</h1>
        <h2>⚠️ Page not found</h2>
      </main>
    </>
  );
};

export default Error404;
