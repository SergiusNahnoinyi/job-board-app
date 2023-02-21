import { useState, useEffect, useRef } from "react";

import SideBarFilterForm from "@/components/MainJobsPage/SideBarFilterForm";
import SearchJobForm from "@/components/MainJobsPage/SearchJobForm";
import Heading from "@/components/MainJobsPage/Heading";
import SortJobsForm from "@/components/MainJobsPage/SortJobsForm";

import JobsList from "@/components/Common/JobsList";

import { getJobs } from "@/services/contentful";
import { searchJobs } from "@/services/api";

export default function MainJobsPage({ jobs }) {
  const [searchFormState, setSearchFormState] = useState("");
  const [displayedJobs, setDisplayedJobs] = useState(jobs);
  const [sideBarFormState, setSideBarFormState] = useState({
    jobTypes: [],
    experienceLevels: [],
    remote: false,
    featuredJobsOnly: false,
    baseSalaryOptions: [],
    baseSalaryBounds: []
  });

  const firstRender = useRef(true);
  const secondRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      const formsStates = { searchFormState, sideBarFormState };
      searchJobs("api/search-jobs", formsStates, setDisplayedJobs);
    }
  }, [sideBarFormState]);

  useEffect(() => {
    if (secondRender.current) {
      secondRender.current = false;
    } else {
      if (searchFormState.length >= 3 || searchFormState.length === 0) {
        const formsStates = { searchFormState, sideBarFormState };
        searchJobs("api/search-jobs", formsStates, setDisplayedJobs);
      }
    }
  }, [searchFormState]);

  return (
    <div className="flex flex-col space-y-10 sm:flex-row sm:space-x-6 sm:space-y-0 md:flex-col md:space-x-0 md:space-y-10 xl:flex-row xl:space-x-6 xl:space-y-0 mt-9">
      <SideBarFilterForm
        sideBarFormState={sideBarFormState}
        setSideBarFormState={setSideBarFormState}
        setdisplayedJobs={setDisplayedJobs}
      />
      <div className="w-full">
        <SearchJobForm
          searchFormState={searchFormState}
          setSearchFormState={setSearchFormState}
          setdisplayedJobs={setDisplayedJobs}
        />
        <div className="flex justify-between items-center mb-4">
          <Heading jobs={displayedJobs} />
          <SortJobsForm
            jobs={displayedJobs}
            setDisplayedJobs={setDisplayedJobs}
          />
        </div>
        <JobsList jobs={displayedJobs} />
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
      },
      revalidate: 5
    };
  } catch (error) {
    return {
      props: {}
    };
  }
};
