import JobsList from "@/components/JobsList";

import { getJobs } from "@/services/contentful-service";

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
