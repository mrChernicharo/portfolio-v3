import { useContext, createContext, ReactNode, useEffect } from "react";
import { Job, Skill, Project } from "../helpers/types";
import { useFetch } from "../useFetch";

interface DataContextValues {
  jobs: {
    data: {
      jobs: Job[];
    } | null;
    error: null;
    loading: boolean;
  };
  skills: {
    data: {
      skills: Skill[];
    } | null;
    error: null;
    loading: boolean;
  };
  projects: {
    data: {
      projects: Project[];
    } | null;
    error: null;
    loading: boolean;
  };
}

const DataContext = createContext<DataContextValues>({
  jobs: { data: { jobs: [] }, error: null, loading: false },
  skills: { data: { skills: [] }, error: null, loading: false },
  projects: { data: { projects: [] }, error: null, loading: false },
});

const useDataContext = () => useContext(DataContext);

const DataContextProvider = (props: { children: ReactNode }) => {
  const projectsResponse = useFetch<{ projects: Project[] }>("https://string7-data-api.onrender.com/projects");
  const skillsResponse = useFetch<{ skills: Skill[] }>("https://string7-data-api.onrender.com/skills");
  const jobsResponse = useFetch<{ jobs: Job[] }>("https://string7-data-api.onrender.com/jobs");

  useEffect(() => {
    console.log({ projectsResponse, skillsResponse, jobsResponse });
  }, [projectsResponse, skillsResponse, jobsResponse]);

  return (
    <DataContext.Provider
      value={{
        jobs: jobsResponse,
        skills: skillsResponse,
        projects: projectsResponse,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export { DataContext, useDataContext, DataContextProvider };
