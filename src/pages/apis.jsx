import Head from "next/head";
import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import Meteo from "../components/Météo";
import Footer from "../components/Footer";

const Api = () => {
  return (
    <motion.div 
    initial={{ y: 1000 }}
    animate={{ y: 0 }}
    exit={{ y: 1000 }}
    transition={{ duration: 0.3 }}>
      <Head>
        <title>Api · Houdu Florian 😎</title>
        <meta name="description" content="D" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://florianhoudu.fr/apis" />
      </Head>
      <header className="api-header">
        <Navigation />
        <h1>Météo actuelle</h1>
      </header>
      <main className="api-content">
        <Meteo />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Api;
