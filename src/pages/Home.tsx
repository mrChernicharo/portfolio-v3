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
import Footer from "../components/shared/Footer/footer";

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  const { projects } = useDataContext();

  const imgs = projects.data?.projects
    ? (projects.data?.projects
        .filter((p) => !!p.image_urls)
        .map((p) => p.image_urls)
        .flat()
        .map((img) => ({ url: img ?? "", mini_url: getMiniUrl(img ?? ""), width: 300, height: 200 })) as AppImage[])
    : [];

  return (
    <div>
      <DiagonalBox ascending={false} className="text-base-content bg-gradient-to-bl from-info-content to-info">
        <HomeHero />
      </DiagonalBox>

      <TypingAnimation />

      <DiagonalBox className="text-base-content bg-gradient-to-bl from-info-content to-info">
        <h1 className="font-bold text-[96px]">Abrakadabra</h1>
        <div>
          <h2 className="text-[36px]">some h2 text</h2>
          <h2 className="text-[36px]">some h2 text</h2>
          <h2 className="text-[36px]">some h2 text</h2>
        </div>
      </DiagonalBox>

      <HomeHero />

      <SomeProjects />

      <DiagonalBox className="overflow-hidden text-base-content bg-gradient-to-bl from-success to-success-content">
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
      </DiagonalBox>

      {imgs?.length > 50 && (
        <>
          <ImageGrid
            className="bg-base-300"
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
