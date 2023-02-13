import JobsList from "@/components/JobsList";

import { getJobs } from "@/services/contentful";

export default function Home({ jobs }) {
  return <JobsList jobs={jobs} />;
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
