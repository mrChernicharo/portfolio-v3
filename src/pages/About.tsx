import { useFetch } from "../useFetch";
import { Job } from "../helpers/types";
import { useDataContext } from "../context/DataContext";

interface Props {}

function About(props: Props) {
  const {} = props;
  const { jobs, skills } = useDataContext();

  return (
    <div>
      Hello about!
      <h1>Jobs</h1>
      <ul>
        {jobs.data?.jobs.map((job) => (
          <li key={job.id}>{job.company}</li>
        ))}
      </ul>
      <h1>Skills</h1>
      <ul>
        {skills.data?.skills.map((skill) => (
          <li key={skill.id}>
            <div>{skill.name}</div>
            <img src={skill.image_url} width={24} height={24} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default About;
