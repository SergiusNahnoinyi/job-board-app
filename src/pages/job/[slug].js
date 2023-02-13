import JobDetails from "@/components/JobDetails";

import { getJobs } from "@/services/contentful-service";

export default function JobDetailsPage({ jobs }) {
  console.log(jobs);

  return <JobDetails />;
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
