import JobCard from "./JobCard";

const JobsList = ({ jobs }) => {
  return (
    <div>
      {jobs.map((job) => (
        <JobCard job={job} key={job.sys.id} />
      ))}
    </div>
  );
};

export default JobsList;
