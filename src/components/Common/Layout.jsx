import Head from "next/head";

import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Job Board Application</title>
        <meta
          name="description"
          content="Job Board Application for displaying vacancies"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="max-w-screen-2xl mx-auto sm:px-6 lg:px-8 bg-slate-50 m-2 p-2">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
