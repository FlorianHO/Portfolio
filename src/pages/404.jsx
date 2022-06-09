import Head from "next/head";

const Error404 = () => {
  return (
    <>
      <Head>
        <title>Error 404 (Page Not Found Error)⚠️</title>
        <meta
          name="description"
          content="Sorry, the page could not be found."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main id="error404">
        <h1>Error 404</h1>
        <h2>⚠️ Page not found</h2>
      </main>
    </>
  );
};

export default Error404;
