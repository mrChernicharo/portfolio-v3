import TypingAnimation from "../components/Home/TypingAnimation";
import HomeHero from "../components/Home/HomeHero";
import SomeProjects from "../components/Home/SomeProjects";
import WorkExperience from "../components/Home/WorkExperience";
import ImageGrid from "../components/shared/ImageGrid/image-grid";
import { useDataContext } from "../context/DataContext";
import { AppImage } from "../helpers/types";
import { getMiniUrl } from "../helpers/shared.helpers";
import { useEffect, useState } from "react";
import { template01, template02 } from "../helpers/img-grid-templates";

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  const { projects } = useDataContext();
  const [imgList, setImgList] = useState<AppImage[]>([]);

  useEffect(() => {
    setImgList(
      () =>
        projects.data?.projects
          .filter((p) => !!p.image_urls)
          .map((p) => p.image_urls)
          .flat()
          .map((img) => ({ url: img ?? "", mini_url: getMiniUrl(img ?? ""), width: 300, height: 200 })) as AppImage[]
    );
  }, [projects]);

  return (
    <div>
      <HomeHero />

      {imgList?.length ? (
        <>
          <ImageGrid
            images={imgList?.slice(36, 38)}
            gridTemplatesObj={template01}
            imgHeight={50}
            imgWidth={140}
            gap={10}
          />
          <ImageGrid images={imgList?.slice(43, 50)} gridTemplatesObj={template02} />
        </>
      ) : null}

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
