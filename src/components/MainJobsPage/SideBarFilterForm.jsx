import { Switch } from "@headlessui/react";

import { classNames } from "@/utils/changeClassName";

import {
  jobTypesOptions,
  experienceLevelsOptions,
  baseSalaryRangesOptions
} from "@/constants/filterOptions";

const SideBarFilterForm = ({ sideBarFormState, setSideBarFormState }) => {
  const handleRemoteChange = () => {
    setSideBarFormState((prevState) => {
      return { ...prevState, remote: !prevState.remote };
    });
  };

  const handleFeaturedJobsOnlyChange = () => {
    setSideBarFormState((prevState) => {
      return { ...prevState, featuredJobsOnly: !prevState.featuredJobsOnly };
    });
  };

  const handleJobTypeSelect = (e, option) => {
    if (e.target.checked) {
      setSideBarFormState((prevState) => {
        const jobTypes = [...prevState.jobTypes];
        jobTypes.push(option);
        return { ...prevState, jobTypes };
      });
    } else {
      setSideBarFormState((prevState) => {
        return {
          ...prevState,
          jobTypes: prevState.jobTypes.filter((jobType) => option != jobType)
        };
      });
    }
  };

  const handleExperienceLevelsSelect = (e, option) => {
    if (e.target.checked) {
      setSideBarFormState((prevState) => {
        const experienceLevels = [...prevState.experienceLevels];
        experienceLevels.push(option);
        return { ...prevState, experienceLevels };
      });
    } else {
      setSideBarFormState((prevState) => {
        return {
          ...prevState,
          experienceLevels: prevState.experienceLevels.filter(
            (experienceLevel) => option != experienceLevel
          )
        };
      });
    }
  };

  const handleBaseSalaryRangesSelect = (e, option, bounds) => {
    if (e.target.checked) {
      setSideBarFormState((prevState) => {
        const baseSalaryOptions = [...prevState.baseSalaryOptions];
        baseSalaryOptions.push(option);

        const baseSalaryBounds = [...prevState.baseSalaryBounds];
        baseSalaryBounds.push(bounds.min);
        baseSalaryBounds.push(bounds.max);

        const newFormState = {
          ...prevState,
          baseSalaryOptions,
          baseSalaryBounds
        };

        return newFormState;
      });
    } else {
      setSideBarFormState((prevState) => {
        const newFormState = {
          ...prevState,
          baseSalaryOptions: prevState.baseSalaryOptions.filter(
            (baseSalaryOption) => option != baseSalaryOption
          ),
          baseSalaryBounds: prevState.baseSalaryBounds.filter(
            (bound) => ![bounds.min, bounds.max].includes(bound)
          )
        };

        return newFormState;
      });
    }
  };

  return (
    <div className="space-y-8">
      {/* White box */}
      <div className="bg-white shadow-lg rounded-sm border border-slate-200 p-5">
        <div className="grid md:grid-cols-2 xl:grid-cols-1 gap-6">
          {/* Group 1 */}
          <Switch.Group as="div" className="flex items-center">
            <Switch
              checked={sideBarFormState.remote}
              onChange={handleRemoteChange}
              className={classNames(
                sideBarFormState.remote ? "bg-indigo-600" : "bg-gray-200",
                "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              )}
            >
              <span
                aria-hidden="true"
                className={classNames(
                  sideBarFormState.remote ? "translate-x-5" : "translate-x-0",
                  "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                )}
              />
            </Switch>
            <Switch.Label as="span" className="ml-3">
              <span className="text-sm font-medium text-gray-900">Remote</span>
            </Switch.Label>
          </Switch.Group>

          {/* Group 2 */}
          <Switch.Group as="div" className="flex items-center">
            <Switch
              checked={sideBarFormState.featuredJobsOnly}
              onChange={handleFeaturedJobsOnlyChange}
              className={classNames(
                sideBarFormState.featuredJobsOnly
                  ? "bg-indigo-600"
                  : "bg-gray-200",
                "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              )}
            >
              <span
                aria-hidden="true"
                className={classNames(
                  sideBarFormState.featuredJobsOnly
                    ? "translate-x-5"
                    : "translate-x-0",
                  "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                )}
              />
            </Switch>
            <Switch.Label as="span" className="ml-3">
              <span className="text-sm font-medium text-gray-900">
                Featured Jobs Only
              </span>
            </Switch.Label>
          </Switch.Group>

          {/* Group 3 */}
          <div>
            <div className="text-sm text-slate-800 font-semibold mb-3">
              Job Types
            </div>
            <ul className="space-y-2">
              {jobTypesOptions.map((option) => {
                return (
                  <li key={option.value}>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        onChange={(e) => handleJobTypeSelect(e, option.value)}
                        checked={sideBarFormState.jobTypes.includes(
                          option.value
                        )}
                      />
                      <span className="text-sm text-slate-600 font-medium ml-2">
                        {option.display}
                      </span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Group 4 */}
          <div>
            <div className="text-sm text-slate-800 font-semibold mb-3">
              Experience Level
            </div>
            <ul className="space-y-2">
              {experienceLevelsOptions.map((option) => {
                return (
                  <li key={option.value}>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        onChange={(e) =>
                          handleExperienceLevelsSelect(e, option.value)
                        }
                        checked={sideBarFormState.experienceLevels.includes(
                          option.value
                        )}
                      />
                      <span className="text-sm text-slate-600 font-medium ml-2">
                        {option.display}
                      </span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Group 5 */}
          <div>
            <div className="text-sm text-slate-800 font-semibold mb-3">
              Salary Range
            </div>
            <ul className="space-y-2">
              {baseSalaryRangesOptions.map((option) => {
                return (
                  <li key={option.value}>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        onChange={(e) =>
                          handleBaseSalaryRangesSelect(
                            e,
                            option.value,
                            option.bounds
                          )
                        }
                        checked={sideBarFormState.baseSalaryOptions.includes(
                          option.value
                        )}
                      />
                      <span className="text-sm text-slate-600 font-medium ml-2">
                        {option.display}
                      </span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBarFilterForm;
