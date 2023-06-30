import React from "react";
import { useDataContext } from "../../context/DataContext";

const WorkExperience = () => {
  const { jobs } = useDataContext();

  console.log({ jobs });

  return (
    <div>
      <h1>Work Experience</h1>

      {jobs.data?.jobs
        ? jobs.data.jobs.map((job) => (
            <div key={job.id}>
              <div>{job.company}</div>
              <div>{job.company_address}</div>
              <div>{job.description}</div>

              <div>
                <img src={job.company_img_url} />
                {job.company_img_url}
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

export default WorkExperience;
