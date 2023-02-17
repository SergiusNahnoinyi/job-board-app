const Heading = ({ jobs }) => {
  let title = `Found ${jobs.length} Jobs`;

  switch (jobs.length) {
    case 0: {
      title = "No Jobs found.";
      break;
    }
    case 1: {
      title = "Only one Job found.";
      break;
    }
    default:
      break;
  }

  return <div className="text-sm text-slate-500 italic">{title}</div>;
};

export default Heading;
