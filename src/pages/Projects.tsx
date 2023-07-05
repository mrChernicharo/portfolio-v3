import { useEffect } from "react";
import { NavBar } from "../components/shared/NavBar";
import { useFetch } from "../useFetch";
import { Project } from "../helpers/types";
import { useDataContext } from "../context/DataContext";
import SomeProjects from "../components/Home/SomeProjects";
import ProjectDisplay from "../components/shared/ProjectDisplay/project-display";

interface Props {}

function Projects(props: Props) {
  const {} = props;
  const { projects, mainProjects } = useDataContext();

  return (
    <div>
      <div className="ml-4">Projects</div>
      {mainProjects.map((proj, i) => (
        <ProjectDisplay key={proj.id} project={proj} isEven={i % 2 == 0} />
      ))}
      <SomeProjects count={100} />
    </div>
  );
}

export default Projects;
