import { searchJobs } from "@/services/contentful";

import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";

export default async function handler(req, res) {
  const { searchFormState, sideBarFormState } = req.body;

  const minBaseSalary =
    sideBarFormState.baseSalaryBounds.length > 0
      ? Math.min(...sideBarFormState.baseSalaryBounds)
      : 0;

  const maxBaseSalary =
    sideBarFormState.baseSalaryBounds.length > 0
      ? Math.max(...sideBarFormState.baseSalaryBounds)
      : 100000;

  const jobTypes = sideBarFormState.jobTypes.map((jobType) =>
    capitalizeFirstLetter(jobType)
  );

  const experienceLevels = sideBarFormState.experienceLevels.map(
    (experienceLevel) => capitalizeFirstLetter(experienceLevel)
  );

  const query = {
    ...sideBarFormState,
    searchBarText: searchFormState,
    jobTypes,
    experienceLevels,
    minBaseSalary,
    maxBaseSalary
  };
  const jobs = await searchJobs(query);
  res.status(200).json(jobs);
}
