import { useContext, createContext, ReactNode } from "react";
import { Job, Skill, Project } from "../helpers/types";
import { useFetch } from "../useFetch";

interface DataContextValues {
  jobs: Job[];
  skills: Skill[];
  projects: Project[];
}

const DataContext = createContext<DataContextValues>({
  jobs: [],
  skills: [],
  projects: [],
});

const useDataContext = () => useContext(DataContext);

const DataContextProvider = (props: { children: ReactNode }) => {
  const projectsResponse = useFetch<{ projects: Project[] }>("https://string7-data-api.onrender.com/projects");
  const skillsResponse = useFetch<{ skills: Skill[] }>("https://string7-data-api.onrender.com/skills");
  const jobsResponse = useFetch<{ jobs: Job[] }>("https://string7-data-api.onrender.com/jobs");

  return (
    <DataContext.Provider
      value={{
        jobs: jobsResponse.data?.jobs || [],
        skills: skillsResponse.data?.skills || [],
        projects: projectsResponse.data?.projects || [],
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export { DataContext, useDataContext, DataContextProvider };
