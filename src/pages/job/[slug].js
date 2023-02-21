import JobDetails from "@/components/JobDetailsPage/JobDetails";
import Loader from "@/components/Common/Loader";

import { getJobsSlugs, getJobBySlug } from "@/services/contentful";

export default function JobDetailsPage({ job }) {
  if (!job) return <Loader message="Loading job data ..." />;
  return <JobDetails job={job} />;
}

export const getStaticPaths = async () => {
  try {
    const slugs = await getJobsSlugs();
    const paths = slugs.map((slug) => ({ params: { slug } }));

    return {
      paths,
      fallback: true
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
      },
      revalidate: 5
    };
  } catch (error) {
    console.log(error);

    return {
      props: {}
    };
  }
};
