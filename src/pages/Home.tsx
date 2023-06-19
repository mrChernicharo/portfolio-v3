import TypingAnimation from "../components/Home/TypingAnimation";
import HomeHero from "../components/Home/HomeHero";

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  return (
    <div>
      <HomeHero />

      <TypingAnimation />

      <div>Some Projects</div>
      <hr />
      <div>Experience</div>
      <hr />
      <div>Why me?</div>
      <hr />
      <div>Achievements</div>
      <hr />
    </div>
  );
};

export default Home;
