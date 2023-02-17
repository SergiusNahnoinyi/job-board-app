import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

export const getCompanies = async () => {
  const companies = await client.getEntries({ content_type: "company" });

  return companies.items;
};

export const getCompaniesSlugs = async () => {
  const slugs = await client.getEntries({
    content_type: "company",
    select: ["fields.slug"]
  });
  const companySlugs = slugs.items.map((slug) => slug.fields.slug);

  return companySlugs;
};

export const getCompanyBySlug = async (slug) => {
  const company = await client.getEntries({
    content_type: "company",
    "fields.slug": slug,
    include: 2
  });

  if (company.items.length == 0) return null;
  const companyBySlug = company.items[0];

  return companyBySlug;
};

export const getJobs = async () => {
  const jobs = await client.getEntries({ content_type: "job" });

  return jobs.items;
};

export const getJobsByCompanyId = async (id) => {
  const jobsByCompanyId = await client.getEntries({
    content_type: "job",
    "fields.company.sys.id": id,
    include: 2
  });

  return jobsByCompanyId.items;
};

export const getJobsSlugs = async () => {
  const slugs = await client.getEntries({
    content_type: "job",
    select: ["fields.slug"]
  });
  const jobSlugs = slugs.items.map((slug) => slug.fields.slug);

  return jobSlugs;
};

export const getJobBySlug = async (slug) => {
  const job = await client.getEntries({
    content_type: "job",
    "fields.slug": slug,
    include: 2
  });

  if (job.items.length === 0) return null;
  const jobBySlug = job.items[0];

  return jobBySlug;
};

export const searchJobs = async (query) => {
  const contentfullQuery = {
    content_type: "job",
    include: 2
  };

  if (query.remote) contentfullQuery["fields.remote"] = query.remote;
  if (query.featuredJobsOnly)
    contentfullQuery["fields.featured"] = query.featuredJobsOnly;

  contentfullQuery["fields.salary[gte]"] = query.minBaseSalary;
  contentfullQuery["fields.salary[lte]"] = query.maxBaseSalary;

  const searchedJobs = await client.getEntries(contentfullQuery);

  const filteredJobs = searchedJobs.items.filter((job) => {
    const hasMatchingExperienceLevel =
      query.experienceLevels.length === 0 ||
      query.experienceLevels.includes(job.fields.experienceLevel);

    const hasMatchingJobType =
      query.jobTypes.length === 0 ||
      query.jobTypes.includes(job.fields.jobType);

    return hasMatchingExperienceLevel && hasMatchingJobType;
  });

  return filteredJobs;
};
