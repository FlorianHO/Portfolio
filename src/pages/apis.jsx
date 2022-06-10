import Head from "next/head";
import Navigation from "../components/Navigation";
import Meteo from "../components/Météo";
import Footer from "../components/Footer";

const Api = () => {
  return (
    <>
      <Head>
        <title>Api · Houdu Florian 😎</title>
        <meta name="description" content="D" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="api-header">
        <Navigation />
        <h1>Météo actuelle</h1>
      </header>
      <main className="api-content">
        <Meteo />
      </main>
      <Footer />
    </>
  );
};

export default Api;
