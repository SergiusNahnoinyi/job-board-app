import JobCard from "./JobCard";

const JobsList = ({ jobs }) => {
  if (!jobs || jobs.length === 0) return <div>No data provided</div>;

  return (
    <div>
      {jobs.map((job) => (
        <JobCard job={job} key={job.sys.id} />
      ))}
    </div>
  );
};

export default JobsList;
