import JobDetails from "@/components/JobDetails";

import { getJobsSlugs, getJobBySlug } from "@/services/contentful";

export default function JobDetailsPage({ job }) {
  return <JobDetails job={job} />;
}

export const getStaticPaths = async () => {
  try {
    const slugs = await getJobsSlugs();
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
    const job = await getJobBySlug(slug);

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
