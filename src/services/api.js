export const searchJobs = async (apiUrl, formsStates, setDisplayedJobs) => {
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    body: JSON.stringify(formsStates)
  });

  const foundJobs = await response.json();
  setDisplayedJobs(foundJobs);
};
