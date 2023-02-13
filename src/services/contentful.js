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

export const getJobsSlugs = async () => {
  const slugs = await client.getEntries({
    content_type: "job",
    select: ["fields.slug"]
  });
  const jobSlugs = slugs.items.map((slug) => slug.fields.slug);

  return jobSlugs;
};

export const getJobBySlug = async ({ slug }) => {
  const job = await client.getEntries({
    content_type: "job",
    "fields.slug": slug,
    include: 2
  });

  if (job.items.length === 0) return null;
  const jobBySlug = job.items[0];

  return jobBySlug;
};
