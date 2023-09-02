import TypingAnimation from "../components/Home/TypingAnimation";
import HomeHero from "../components/Home/HomeHero";
import SomeProjects from "../components/Home/SomeProjects";
import WorkExperience from "../components/About/WorkExperience";
import ImageGrid from "../components/shared/ImageGrid/image-grid";
import { useDataContext } from "../context/DataContext";
import { AppImage } from "../helpers/types";
import { getMiniUrl } from "../helpers/shared.helpers";
import { template01, template02, template03 } from "../helpers/img-grid-templates";
import DiagonalBox from "../components/shared/DiagonalBox/diagonal-box";
import SomeDevices from "../components/Home/SomeDevices";
import LottieHero from "../components/Home/LottieHero";
import About from "./About";
import Projects from "./Projects";

const Home: React.FunctionComponent = () => {
  const { projects } = useDataContext();

  const imgs = projects
    .filter((p) => !!p.image_urls)
    .map((p) => p.image_urls)
    .flat()
    .map((img) => ({ url: img ?? "", mini_url: getMiniUrl(img ?? ""), width: 300, height: 200 })) as AppImage[];

  return (
    <div>
      <LottieHero />

      <DiagonalBox className="text-primary-content bg-gradient-to-bl from-primary to-secondary">
        <HomeHero />
      </DiagonalBox>

      <div className="h-8"></div>
      <div className="h-8"></div>
      <div className="h-8"></div>


      <div className="h-8"></div>
      <div className="h-8"></div>
      <div className="h-8"></div>


      <About />


      {/* <TypingAnimation /> */}

      {/* <SomeDevices /> */}

      {/* <div>Why me?</div> */}

      {/* <div className="border border-solid h-8"></div> */}


      {/* <SomeProjects /> */}


      {/* <div className="text-center">
        <h1 className="h1-text">Yo, get some grids!</h1>
      </div> */}

      {/* <div>
        {imgs?.length > 50 && (
          <ImageGrid
            className="bg-base-300 my-12"
            images={imgs?.slice(36, 38)}
            gridTemplatesObj={template01}
            imgHeight={150}
            imgWidth={240}
            gap={10}
          />
        )}
      </div>

      <div>{imgs?.length > 50 && <ImageGrid className="bg-base-300" images={imgs?.slice(43, 50)} gridTemplatesObj={template02} />}</div> */}


      {/* 
      <div>
        <h1 className="h1-text mt-2">Achievements</h1>

        <ul>
          <li>
            stackoverflow reputation
            <a href="https://stackoverflow.com/users/13111779/felipe-chernicharo" rel="nofollow">
              <img
                src="https://camo.githubusercontent.com/c16a9efb8598526df6dc23ea5df3787e0ee4d67d1d77aa416447e7f9b23bc9ef/68747470733a2f2f737461636b6f766572666c6f772e636f6d2f75736572732f666c6169722f31333131313737392e706e673f7468656d653d6461726b"
                width="240"
                alt="profile for Felipe Chernicharo at Stack Overflow, Q&amp;A for professional and enthusiast programmers"
                title="profile for Felipe Chernicharo at Stack Overflow, Q&amp;A for professional and enthusiast programmers"
                data-canonical-src="https://stackoverflow.com/users/flair/13111779.png?theme=dark"
              />
            </a>
          </li>
          <li>github repos</li>
          <li>course certificates</li>
          <li>spoken languages</li>
        </ul>
      </div> */}
    </div>
  );
};

export default Home;
