import { useContext, createContext, ReactNode, useEffect, useState } from "react";
import { Job, Skill, Project, MainProject } from "../helpers/types";
import { useFetch } from "../useFetch";
import { mainProjSkillNames } from "../helpers/constants";

interface DataContextValues {
  jobs: Job[];
  projects: Project[];
  mainProjects: MainProject[];
  skills: Skill[];
  // projects: {
  //   data: {
  //     projects: Project[];
  //   } | null;
  //   error: null;
  //   loading: boolean;
  // };
}

const DataContext = createContext<DataContextValues>({
  jobs: [],
  projects: [],
  mainProjects: [],
  skills: [],
  // skills: { data: { skills: [] }, error: null, loading: false },
  // projects: { data: { projects: [] }, error: null, loading: false },
  // jobs: { data: { jobs: [] }, error: null, loading: false },
});

{
  // me: {
  //   fullname: "Felipe Chernicharo",
  //   first: "Felipe",
  //   nick: "melodev",
  //   started_coding_at: new Date(2017, 4, 21, 12, 0, 0),
  //   dob: new Date(1987, 3, 29, 11, 0, 0),
  // },
}

const useDataContext = () => useContext(DataContext);

const DataContextProvider = (props: { children: ReactNode }) => {
  const projectsResponse = useFetch<{ projects: Project[] }>("https://string7-data-api.onrender.com/projects");
  const skillsResponse = useFetch<{ skills: Skill[] }>("https://string7-data-api.onrender.com/skills");
  const jobsResponse = useFetch<{ jobs: Job[] }>("https://string7-data-api.onrender.com/jobs");

  const jobs = jobsResponse.data?.jobs || [];
  const skills = skillsResponse.data?.skills || [];
  const projects = projectsResponse.data?.projects || [];

  const projectsByName = projects.reduce((acc, next) => {
    acc[next.name] = next;
    return acc;
  }, {} as Record<string, Project>);

  const skillsByName = skills.reduce((acc, next) => {
    acc[next.name] = next;
    return acc;
  }, {} as Record<string, Skill>);

  const mainProjects = Object.entries(mainProjSkillNames).map(([projName, skills]) => ({
    ...projectsByName[projName],
    skills: skills.map((skillName) => skillsByName[skillName]),
  }));

  useEffect(() => {
    console.log({ projects, mainProjects });
  }, [projects]);
  useEffect(() => {
    console.log({ skills });
  }, [skills]);
  useEffect(() => {
    console.log({ jobs });
  }, [jobs]);

  return (
    <DataContext.Provider
      value={{
        jobs,
        skills,
        projects,
        mainProjects,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export { DataContext, useDataContext, DataContextProvider };
