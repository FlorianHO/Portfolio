import Head from "next/head";
import Navigation from "../components/Navigation";

const Portfolio = () => {
  return (
    <>
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
    </>
  );
};

export default Portfolio;
