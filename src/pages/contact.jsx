import Head from "next/head";
import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "../components/Navigation"

const Contact = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

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
    console.log('Sending');
    setSubmitted(true);

    let userdata= {
      Name: name,
      Email: email,
      Message: message,
      }

    const res = await fetch('/api/mail', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userdata)
      })

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
        <form method="POST" onSubmit={handleOnSubmit}>
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


