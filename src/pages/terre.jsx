import Head from "next/head";
import { motion } from "framer-motion";
import Navigation from "../components/Navigation";

const Terre = () => {
  return (
    <motion.div>
      <Head>
        <meta name="description" content="Yes" />
        <title>Terre · Houdu Florian 😎</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://florianhoudu.fr/portfolio" />
      </Head>
      <header>
        <Navigation />
        <h1>Portfolio</h1>
      </header>

    </motion.div>
  );
};

export default Terre;
