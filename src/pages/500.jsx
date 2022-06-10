import Head from "next/head";

const Error500 = () => {
  return (
    <>
      <Head>
        <title>Error 500 (Internal Server Error) ⚠️</title>
        <meta name="description" content="Sorry, there was a problem with the web server · Error 500" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main id="error500">
        <h1>Error 500</h1>
        <h2>⚠️ Sorry, there was a problem with the server...</h2>
      </main>
    </>
  );
};

export default Error500;
