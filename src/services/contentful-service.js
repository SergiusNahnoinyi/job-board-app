import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

export const getCompanies = async () => {
  const companies = await client.getEntries({ content_type: "company" });
  return companies.items;
};

export const getJobs = async () => {
  const jobs = await client.getEntries({ content_type: "job" });
  return jobs.items;
};
