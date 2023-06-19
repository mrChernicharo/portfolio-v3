import { useFetch } from "../useFetch";
import { Job } from "../helpers/types";
import { useDataContext } from "../context/DataContext";

interface Props {}

function About(props: Props) {
  const {} = props;
  const { jobs } = useDataContext();
  const { data, error, loading } = jobs;

  return (
    <div>
      Hello about!
      <h1>Jobs</h1>
      <ul>
        {data?.jobs.map((job) => (
          <li key={job.id}>{job.company}</li>
        ))}
      </ul>
    </div>
  );
}

export default About;
