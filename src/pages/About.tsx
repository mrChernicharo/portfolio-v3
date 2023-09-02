import { useDataContext } from "../context/DataContext";
import WorkExperience from "../components/About/WorkExperience";
import Lettering from "../components/About/Lettering";
import Skills from "../components/About/Skills";

interface Props {}

function About(props: Props) {
  const {} = props;
  const { jobs, skills, mainProjects } = useDataContext();

  return (
    <div>

      <Lettering />

      <WorkExperience />

      <Skills />
    </div>
  );
}

export default About;
