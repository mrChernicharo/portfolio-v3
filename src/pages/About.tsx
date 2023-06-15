import { useFetch } from "../useFetch";
import { Job } from "../helpers/types";

interface Props {}

function About(props: Props) {
  const {} = props;
  const { data, loading, error } = useFetch<{ jobs: Job[] }>("https://string7-data-api.onrender.com/jobs");

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
