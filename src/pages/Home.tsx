import TypingAnimation from "../components/TypingAnimation";
import HomeHero from "../components/HomeHero";

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  return (
    <div>
      <HomeHero />
      
      <TypingAnimation />

      {/* <HomeCardGroup /> */}
    </div>
  );
};

export default Home;
