import { useFetch } from "../useFetch";
import { Job, Skill } from "../helpers/types";
import { useDataContext } from "../context/DataContext";
import { mainProjSkillNames } from "../helpers/constants";
import ProjectDisplay from "../components/shared/ProjectDisplay/project-display";

interface Props {}

function About(props: Props) {
  const {} = props;
  const { jobs, skills, mainProjects } = useDataContext();

  return (
    <div>
      Hello about!
      <h1>Jobs</h1>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <div>
              {job.title} at <strong>{job.company}</strong>
            </div>
            <img src={job.company_img_url} width={200} />
          </li>
        ))}
      </ul>
      <h1>Skills</h1>
      <ul>
        {skills.map((skill) => (
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
