import TypingAnimation from "../components/Home/TypingAnimation";
import HomeHero from "../components/Home/HomeHero";
import SomeProjects from "../components/Home/SomeProjects";
import WorkExperience from "../components/Home/WorkExperience";

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  return (
    <div>
      <HomeHero />

      <TypingAnimation />

      <SomeProjects />

      <hr />
      <WorkExperience />
      <hr />
      <div>Why me?</div>
      <hr />
      <div>Achievements</div>
      <hr />
    </div>
  );
};

export default Home;
