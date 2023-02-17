export const jobTypesOptions = [
  { value: "full-time", display: "Full Time" },
  { value: "part-time", display: "Part Time" },
  { value: "internship", display: "Internship" },
  { value: "contract", display: "Contract" }
];

export const experienceLevelsOptions = [
  { value: "junior", display: "Junior" },
  { value: "middle", display: "Middle" },
  { value: "senior", display: "Senior" },
  { value: "tech-lead", display: "Tech Lead" }
];

export const baseSalaryRangesOptions = [
  { value: "<2K", display: "< $2K", bounds: { min: 0, max: 2000 } },
  {
    value: "2K-5K",
    display: "$2K - $5K",
    bounds: { min: 2001, max: 5000 }
  },
  {
    value: "5K-10K",
    display: "$5K - $10K",
    bounds: { min: 5001, max: 10000 }
  },
  {
    value: "> 10K",
    display: "> $10K",
    bounds: { min: 10001, max: 100000 }
  }
];

export const options = [
  { value: "date-posted", display: "Date Posted" },
  { value: "company", display: "Company" },
  { value: "salary-asc", display: "Salary ASC" },
  { value: "salary-desc", display: "Salary DESC" }
];
