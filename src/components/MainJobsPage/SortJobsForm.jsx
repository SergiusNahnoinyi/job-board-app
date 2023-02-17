import { useState } from "react";

import {
  sortJobsByPostedDate,
  sortJobsBySalary,
  sortJobsByCompanyName
} from "@/utils/sortJobs";

import { options } from "@/constants/filterOptions";

const SortJobsForm = ({ jobs, setDisplayedJobs }) => {
  const [sortBy, setSortBy] = useState("date-posted-desc");

  const handleChange = (e) => {
    e.preventDefault();
    const newSortBy = e.target.value;

    if (newSortBy === "date-posted-asc") {
      const sortedJobs = sortJobsByPostedDate({ jobs, ASC: true });
      setDisplayedJobs(sortedJobs);
    }
    if (newSortBy === "date-posted-desc") {
      const sortedJobs = sortJobsByPostedDate({ jobs, ASC: false });
      setDisplayedJobs(sortedJobs);
    }
    if (newSortBy === "salary-asc") {
      const sortedJobs = sortJobsBySalary({ jobs, ASC: true });
      setDisplayedJobs(sortedJobs);
    }
    if (newSortBy === "salary-desc") {
      const sortedJobs = sortJobsBySalary({ jobs, ASC: false });
      setDisplayedJobs(sortedJobs);
    }
    if (newSortBy === "company") {
      const sortedJobs = sortJobsByCompanyName({ jobs });
      setDisplayedJobs(sortedJobs);
    }
    setSortBy(newSortBy);
  };

  return (
    <div>
      {/* Sort */}
      <div className="flex items-center space-x-2">
        <label
          htmlFor="sorting"
          className="block text-sm font-sm text-gray-500 italic w-full"
        >
          Sort By
        </label>
        <select
          id="sorting"
          name="sorting"
          onChange={handleChange}
          className="mt-1 block  pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-sm"
          defaultValue={sortBy}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.display}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SortJobsForm;
