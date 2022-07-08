import Head from "next/head";
import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "../components/Navigation"

const Contact = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  let handleOnEmailChange = (e) => {
    let inputValue = e.target.value;
    setEmail(inputValue);
  }

  let handleOnSubjectChange = (e) => {
    let inputValue = e.target.value;
    setSubject(inputValue);
  }

  let handleOnNameChange = (e) => {
    let inputValue = e.target.value;
    setName(inputValue);
  }

  let handleOnMessageChange = (e) => {
    let inputValue = e.target.value;
    setMessage(inputValue);
  }

  let handleOnSubmit = async (e) => {
    e.preventDefault();
    const results = await fetch('/api/email', {
      method: "post",
      body: JSON.stringify({email: email, name: name, subject: subject, message: message})
    });
    if(results.status == 200) {
      console.log("!!!!!!");
    } else {
      console.log("gnnnbdf");
    }
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
        <form method="post" onSubmit={handleOnSubmit}>
          <input type="text" name="subject" value={subject} onChange={handleOnSubjectChange}/>
          <input type="text" name="name" value={name} onChange={handleOnNameChange} />
          <input type="email" name="email" value={email} onChange={handleOnEmailChange} />
          <input type="text" name="message" value={message} onChange={handleOnMessageChange} />
          <button type="submit">Envoyer</button>
        </form>
      </section>
    </motion.div>
  );
};

export default Contact;


