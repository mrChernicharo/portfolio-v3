import { useEffect } from "react";
import { NavBar } from "../components/shared/NavBar";
import { useFetch } from "../useFetch";
import { Project } from "../helpers/types";
import { useDataContext } from "../context/DataContext";
import SomeProjects from "../components/Home/SomeProjects";

interface Props {}

function Projects(props: Props) {
  const {} = props;
  const { projects } = useDataContext();
  const { data, error, loading } = projects;

  return (
    <div>
      Hello Projects!
      <div>{loading ? <div>loading...</div> : <SomeProjects count={100} />}</div>
    </div>
  );
}

export default Projects;
