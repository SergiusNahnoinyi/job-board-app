export const sortJobsByPostedDate = ({ jobs, ASC = true }) => {
  const sorted = [...jobs];

  sorted.sort(function (job1, job2) {
    if (job1.fields.postedDate < job2.fields.postedDate) return ASC ? -1 : 1;
    else if (job1.fields.postedDate > job2.fields.postedDate)
      return ASC ? 1 : -1;
    else return 0;
  });

  return sorted;
};

export const sortJobsBySalary = ({ jobs, ASC = true }) => {
  const sorted = [...jobs];

  sorted.sort(function (job1, job2) {
    if (job1.fields.salary < job2.fields.salary) return ASC ? -1 : 1;
    else if (job1.fields.salary > job2.fields.salary) return ASC ? 1 : -1;
    else return 0;
  });

  return sorted;
};

export const sortJobsByCompanyName = ({ jobs }) => {
  const sorted = [...jobs];

  sorted.sort(function (job1, job2) {
    if (job1.fields.company.fields.name < job2.fields.company.fields.name)
      return -1;
    else if (job1.fields.company.fields.name > job2.fields.company.fields.name)
      return 1;
    else return 0;
  });

  return sorted;
};
