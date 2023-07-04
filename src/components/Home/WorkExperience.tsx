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

      {jobList.map((job, i) => {
        const isEven = i % 2 === 0;

        return (
          <DiagonalBox slope={6} ascending={isEven} className={`p-8 mb-16 ${isEven ? "bg-secondary" : "bg-primary"}`}>
            <div key={job.id} className={`flex flex-col ${isEven ? "items-end" : "items-start"}`}>
              <div className="w-full flex items-center justify-between">
                <h1 className="text-[4rem] font-bold mt-2">{job.company}</h1>
                <img className="h-[60px] rounded-lg" src={job.company_img_url} />
              </div>
              <h4 className="text-gray-400 pt-4 pb-8">{job.company_address}</h4>

              <div>Started {new Date(job.started_at).toLocaleDateString("en", { month: "long", year: "numeric" })}</div>
              <div>
                {job.ended_at
                  ? "Ended " + new Date(job.ended_at).toLocaleDateString("en", { month: "long", year: "numeric" })
                  : "Current job"}
              </div>
              <div className="mb-8">{job.description}</div>
            </div>
          </DiagonalBox>
        );
      })}
    </div>
  );
};

export default WorkExperience;
