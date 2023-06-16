import { useEffect } from "react";
import { NavBar } from "../components/NavBar";
import { useFetch } from "../useFetch";
import { Project } from "../helpers/types";

interface Props {}


function Projects(props: Props) {
  const {} = props;
  const { data, loading, error } = useFetch<{ projects: Project[] }>("https://string7-data-api.onrender.com/projects");

  return (
    <div>
      Hello Projects!
      <div>
        {loading && <div>loading...</div>}

        {data?.projects.map((p) => (
          <div key={Math.random()}>{JSON.stringify(p, null, 2)}</div>
        ))}
      </div>
    </div>
  );
}

export default Projects;



