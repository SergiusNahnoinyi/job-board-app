import CompanyDetails from "../../components/CompanyDetailsPage/CompanyDetails";
import Loader from "@/components/Common/Loader";

import {
  getCompaniesSlugs,
  getCompanyBySlug,
  getJobsByCompanyId
} from "@/services/contentful";

export default function CompanyDetailsPage({ company, companyJobs }) {
  if (!company) return <Loader message="Loading company data ..." />;

  return <CompanyDetails company={company} companyJobs={companyJobs} />;
}

export const getStaticPaths = async () => {
  try {
    const slugs = await getCompaniesSlugs();
    const paths = slugs.map((slug) => ({ params: { slug } }));

    return {
      paths,
      fallback: true
    };
  } catch (error) {
    console.log(error);

    return { paths: {}, fallback: false };
  }
};

export const getStaticProps = async ({ params }) => {
  const slug = params.slug;

  try {
    const company = await getCompanyBySlug(slug);
    const companyJobs = await getJobsByCompanyId(company.sys.id);

    return {
      props: {
        company,
        companyJobs
      },
      revalidate: 5
    };
  } catch (error) {
    console.log(error);

    return {
      props: {}
    };
  }
};
