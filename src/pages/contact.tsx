import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import fr from "../content/Fr.jsx";
import en from "../content/En.jsx";

const Contact = () => {
  const [email, setEmail] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const router = useRouter();
  const { locale } = router;
  const language = locale === "fr" ? fr : en;

  let handleOnEmailChange = (e: any) => {
    let inputValue = e.target.value;
    setEmail(inputValue);
  }

  let handleOnSubjectChange = (e: any) => {
    let inputValue = e.target.value;
    setSubject(inputValue);
  }

  let handleOnNameChange = (e: any) => {
    let inputValue = e.target.value;
    setName(inputValue);
  }

  let handleOnMessageChange = (e: any) => {
    let inputValue = e.target.value;
    setMessage(inputValue);
  }

  let handleOnSubmit = async (e: any) => {
    e.preventDefault();
    Array.from((document.querySelectorAll(".input") as any)).forEach((val : any) => {
      val.value = " ";
    });
    
    setSubmitted(true);

    let userdata= {
      Name: name,
      Email: email,
      Message: message,
      Subject: subject
      }

    const res = await fetch('/api/mail', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userdata)
      })
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
      <Navigation />
      </header>
      <section id="contact">
        <form method="POST" onSubmit={handleOnSubmit}>
          <input type="text" name="subject" className="input" value={subject} onChange={handleOnSubjectChange} required/>
          <input type="text" name="name" className="input" value={name} onChange={handleOnNameChange} required/>
          <input type="email" name="email" className="input" value={email} onChange={handleOnEmailChange} required/>
          <input type="text" name="message" className="input" value={message} onChange={handleOnMessageChange} required/>
          <button type="submit">{language.contact[0]}</button>
        </form>
      </section>
      <Footer />
    </motion.div>
  );
};

export default Contact;


