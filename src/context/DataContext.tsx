import { useContext, createContext, ReactNode, useEffect, useState } from "react";
import { Job, Skill, Project } from "../helpers/types";
import { useFetch } from "../useFetch";

interface DataContextValues {
  jobs: Job[];
  projects: Project[];
  skills: {
    data: {
      skills: Skill[];
    } | null;
    error: null;
    loading: boolean;
  };
  // projects: {
  //   data: {
  //     projects: Project[];
  //   } | null;
  //   error: null;
  //   loading: boolean;
  // };
  // me: {
  //   fullname: string;
  //   first: string;
  //   nick: string;
  //   started_coding_at: Date;
  //   dob: Date;
  // };
}

const DataContext = createContext<DataContextValues>({
  jobs: [],
  projects: [],
  skills: { data: { skills: [] }, error: null, loading: false },
  // projects: { data: { projects: [] }, error: null, loading: false },
  // jobs: { data: { jobs: [] }, error: null, loading: false },
  // me: {
  //   fullname: "Felipe Chernicharo",
  //   first: "Felipe",
  //   nick: "melodev",
  //   started_coding_at: new Date(2017, 4, 21, 12, 0, 0),
  //   dob: new Date(1987, 3, 29, 11, 0, 0),
  // },
});

const useDataContext = () => useContext(DataContext);

const DataContextProvider = (props: { children: ReactNode }) => {
  const projectsResponse = useFetch<{ projects: Project[] }>("https://string7-data-api.onrender.com/projects");
  const skillsResponse = useFetch<{ skills: Skill[] }>("https://string7-data-api.onrender.com/skills");
  const jobsResponse = useFetch<{ jobs: Job[] }>("https://string7-data-api.onrender.com/jobs");

  useEffect(() => {
    console.log({ projectsResponse, skillsResponse, jobsResponse });

    jobsResponse.data?.jobs || [];
  }, [projectsResponse, skillsResponse, jobsResponse]);

  return (
    <DataContext.Provider
      value={{
        jobs: jobsResponse.data?.jobs || [],
        skills: skillsResponse,
        projects: projectsResponse.data?.projects || [],
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export { DataContext, useDataContext, DataContextProvider };
