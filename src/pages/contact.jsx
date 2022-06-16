import Head from "next/head";
import { motion } from "framer-motion";
import Navigation from "../components/Navigation"

const Contact = () => {
  let handleOnSubmit = async (e) => {
    e.preventDefault();
  }

  return (
    <motion.div>
      <Head>
        <meta name="description" content="D" />
        <title>Contact · Houdu Florian</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://florianhoudu.fr/contact" />
      </Head>
      <header>
        {/* <Navigation /> */}
      </header>
      <section id="contact">
        <form method="POST" onSubmit={handleOnSubmit}>
          <input type="text" name="subject" />
          <input type="text" name="name" />
          <input type="email" name="email" />
          <input type="text" name="message" />
          <button type="submit">Envoyer</button>
        </form>
      </section>
    </motion.div>
  );
};

export default Contact;
