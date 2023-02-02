import Head from "next/head";

import { getCompanies } from "@/services/contentful-service";

export default function Home({ companies }) {
  console.log(companies);
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
      <main>This is main</main>
    </>
  );
}

export const getStaticProps = async () => {
  try {
    const companies = await getCompanies();

    return {
      props: {
        companies,
      },
    };
  } catch (error) {
    console.log(error);

    return {
      props: {},
    };
  }
};
