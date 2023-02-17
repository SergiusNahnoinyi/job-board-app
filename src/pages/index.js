import SideBarFilterForm from "@/components/MainJobsPage/SideBarFilterForm";
import SearchJobForm from "@/components/MainJobsPage/SearchJobForm";
import Heading from "@/components/MainJobsPage/Heading";

import JobsList from "@/components/Common/JobsList";

import { getJobs } from "@/services/contentful";

export default function MainJobsPage({ jobs }) {
  return (
    <div className="flex flex-col space-y-10 sm:flex-row sm:space-x-6 sm:space-y-0 md:flex-col md:space-x-0 md:space-y-10 xl:flex-row xl:space-x-6 xl:space-y-0 mt-9">
      <SideBarFilterForm />
      <div className="w-full">
        <SearchJobForm />
        <Heading jobs={jobs} />
        <JobsList jobs={jobs} />
      </div>
    </div>
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
