import Head from "next/head";
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import Navigation from "../components/Navigation"

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_f7fs2bj', 'template_l6v7o7x', e.target, 'cqpsfguPTSB545kml')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <motion.div>
      <Head>
        <meta name="description" content="D" />
        <title>Contact · Houdu Florian</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://florianhoudu.fr/contact" />
      </Head>
      <header>
        <Navigation />
      </header>
      <section id="contact">
        <form method="POST" onSubmit={sendEmail}>
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
