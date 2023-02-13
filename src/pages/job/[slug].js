import JobDetails from "@/components/JobDetails";

import { getJobs } from "@/services/contentful-service";

export default function JobDetailsPage({ job }) {
  return <JobDetails job={job} />;
}

export const getStaticPaths = async () => {
  try {
    const jobs = await getJobs();
    const slugs = jobs.map((job) => job.fields.slug);
    const paths = slugs.map((slug) => ({ params: { slug } }));

    return {
      paths,
      fallback: false
    };
  } catch (error) {
    console.log(error);

    return { paths: {}, fallback: false };
  }
};

export const getStaticProps = async ({ params }) => {
  const slug = params.slug;

  try {
    const jobs = await getJobs();
    const job = jobs.filter((job) => job.fields.slug === slug)[0];

    return {
      props: {
        job
      }
    };
  } catch (error) {
    console.log(error);

    return {
      props: {}
    };
  }
};
