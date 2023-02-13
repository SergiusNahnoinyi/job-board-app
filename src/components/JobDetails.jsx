import Link from "next/link";

const JobDetails = ({ job }) => {
  console.log(job);
  return (
    <>
      <Link href="/" className="text-indigo-400">
        Back To Jobs
      </Link>
      <div>{job.fields.title}</div>
    </>
  );
};

export default JobDetails;
