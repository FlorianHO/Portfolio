import Head from "next/head";
import Navigation from "../components/french/Navigation";
import Meteo from "../components/french/Météo";
import Footer from "../components/french/Footer";

const Api = () => {
  <Head>
    <title>Api · Houdu Florian 😎</title>
    <meta name="description" content="D" />
    <link rel="icon" href="/favicon.ico" />
  </Head>;
  return (
    <>
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
