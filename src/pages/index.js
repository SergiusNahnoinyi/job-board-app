import Head from "next/head";

import JobsList from "@/components/JobsList";

import { getJobs } from "@/services/contentful-service";

export default function Home({ jobs }) {
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
      <main>
        <JobsList jobs={jobs} />
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  try {
    const jobs = await getJobs();
    return {
      props: {
        jobs
      }
    };
  } catch (error) {
    return {
      props: {}
    };
  }
};
