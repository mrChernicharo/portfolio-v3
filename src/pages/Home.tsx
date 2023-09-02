import TypingAnimation from "../components/Home/TypingAnimation";
import HomeHero from "../components/Home/HomeHero";
import SomeProjects from "../components/Home/SomeProjects";
import WorkExperience from "../components/Home/WorkExperience";
import ImageGrid from "../components/shared/ImageGrid/image-grid";
import { useDataContext } from "../context/DataContext";
import { AppImage } from "../helpers/types";
import { getMiniUrl } from "../helpers/shared.helpers";
import { template01, template02, template03 } from "../helpers/img-grid-templates";
import DiagonalBox from "../components/shared/DiagonalBox/diagonal-box";
import SomeDevices from "../components/Home/SomeDevices";
import LottieHero from "../components/Home/LottieHero";

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

      {/* <TypingAnimation /> */}

      {/* <SomeDevices /> */}
      <hr />
      <div>Why me?</div>

      <DiagonalBox className="text-primary-content bg-gradient-to-bl from-primary to-secondary">
        <HomeHero />
      </DiagonalBox>

      <SomeProjects />

      {imgs?.length > 50 && (
        <>
          <ImageGrid
            className="bg-base-300 my-12"
            images={imgs?.slice(36, 38)}
            gridTemplatesObj={template01}
            imgHeight={50}
            imgWidth={140}
            gap={10}
          />
          <ImageGrid className="bg-base-300" images={imgs?.slice(43, 50)} gridTemplatesObj={template02} />
        </>
      )}

      <hr />

      <hr />
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
      </div>
      <hr />

      {/* <DiagonalBox ascending={false} className="text-base-content bg-gradient-to-bl from-info-content to-info">
      </DiagonalBox> */}

      {/* <DiagonalBox className="overflow-hidden text-base-content bg-gradient-to-bl from-success to-success-content">
        <div className="grid">
          <h1 className="font-bold text-[96px]">Abrakadabra</h1>

          <h2 className="text-[36px]">some h2 text</h2>
          <h2 className="text-[36px]">some h2 text</h2>

          <h1 className="font-bold text-[96px]">Abrakadabra</h1>

          <h2 className="text-[36px]">some h2 text</h2>
          <h2 className="text-[36px]">some h2 text</h2>

          <h1 className="font-bold text-[96px]">Abrakadabra</h1>

          <ImageGrid
            images={imgs?.slice(36, 38)}
            gridTemplatesObj={template03}
            imgHeight={100}
            imgWidth={200}
            gap={10}
          />
        </div>
      </DiagonalBox> */}

      {/* <DiagonalBox className="text-base-content bg-gradient-to-bl from-primary to-secondary">
        <h1 className="font-bold text-[96px]">Abrakadabra</h1>
        <div>
          <h2 className="text-[36px]">some h2 text</h2>
          <h2 className="text-[36px]">some h2 text</h2>
          <h2 className="text-[36px]">some h2 text</h2>
        </div>
      </DiagonalBox> */}
    </div>
  );
};

export default Home;
