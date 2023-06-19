import { useEffect } from "react";
import { NavBar } from "../components/shared/NavBar";
import { useFetch } from "../useFetch";
import { Project } from "../helpers/types";
import { useDataContext } from "../context/DataContext";

interface Props {}

function Projects(props: Props) {
  const {} = props;
  const { projects } = useDataContext();
  const { data, error, loading } = projects;

  return (
    <div>
      Hello Projects!
      <div>
        {loading && <div>loading...</div>}

        {data?.projects.map((p) => (
          <div key={p.id}>{JSON.stringify(p, null, 2)}</div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
