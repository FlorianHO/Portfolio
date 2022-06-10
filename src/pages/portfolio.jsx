import Head from "next/head";
import { motion } from "framer-motion";
import Navigation from "../components/Navigation";

const Portfolio = () => {
  return (
    <motion.div
    initial={{ scaleY: 0 }}
    animate={{ scaleY: 1 }}
    exit={{ scaleY: 0 }}
    transition={{ duration: 0.5 }}>
      <Head>
        <meta name="description" content="Yes" />
        <title>Portfolio · Houdu Florian 😎</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navigation />
      </header>
      <section id="portfolio">
        <div className="container-portfolio"></div>
      </section>
    </motion.div>
  );
};

export default Portfolio;
