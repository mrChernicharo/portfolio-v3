import * as React from "react";
import { NavBar } from "../components/NavBar";
import TypingAnimation from "../components/TypingAnimation";
import HomeHero from "../components/HomeHero";

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  return (
    <div>
      <HomeHero />
      <TypingAnimation />
    </div>
  );
};

export default Home;
