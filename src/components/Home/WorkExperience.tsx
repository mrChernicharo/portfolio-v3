import React from "react";
import { useDataContext } from "../../context/DataContext";
import DiagonalBox from "../shared/DiagonalBox/diagonal-box";

const WorkExperience = () => {
  const { jobs } = useDataContext();

  const jobList = jobs.data?.jobs || [];
  jobList.sort((a, b) => new Date(b.started_at).getTime() - new Date(a.started_at).getTime());

  return (
    <div>
      <h1>Work Experience</h1>

      {jobList.map((job, i) => (
        <DiagonalBox
          slope={6}
          ascending={i % 2 === 0}
          className={`p-8 mb-16 ${i % 2 === 0 ? "bg-secondary" : "bg-primary"}`}
        >
          <div key={job.id} className={`flex flex-col ${i % 2 === 0 ? "items-end " : "items-start"}`}>
            <div className="w-full flex items-center justify-between">
              <h1 className="text-[4rem] font-bold">{job.company}</h1>
              <img className="h-[60px]" src={job.company_img_url} />
            </div>
            <h4 className="text-gray-400 pt-4 pb-8">{job.company_address}</h4>
            <div>{job.description}</div>

            <div></div>
          </div>
        </DiagonalBox>
      ))}
    </div>
  );
};

export default WorkExperience;
