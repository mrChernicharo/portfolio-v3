import TypingAnimation from "../components/Home/TypingAnimation";
import HomeHero from "../components/Home/HomeHero";
import SomeProjects from "../components/Home/SomeProjects";
import WorkExperience from "../components/Home/WorkExperience";
import ImageGrid from "../components/shared/ImageGrid/image-grid";
import ImageGrid2 from "../components/shared/ImageGrid/image-grid2";
import { useDataContext } from "../context/DataContext";
import { AppImage } from "../helpers/types";
import { getMiniUrl } from "../helpers/shared.helpers";
import { useEffect, useState } from "react";

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
          {/* <ImageGrid images={imgList?.slice(27, 31)} gridTemplateAreas={`"A B C" "D B E" "F F E"`} />
          <ImageGrid images={imgList?.slice(12, 15)} gridTemplateAreas={`"A B B" "C C D" "E F D"`} />
          <ImageGrid images={imgList?.slice(21, 30)} gridTemplateAreas={`"A A B" "A A B" "C C B" "C C D"`} />
          <ImageGrid images={imgList?.slice(21, 30)} gridTemplateAreas={`"A B" "A C" "D C" "D E"`} />
          <ImageGrid
            images={imgList?.slice(21, 30)}
            gridTemplateAreas={`"A A A B" "A A A C" "A A A D" "E F F F" "G F F F"`}
          /> */}

          <ImageGrid2
            images={imgList?.slice(21, 24)}
            gridTemplatesObj={{
              // prettier-ignore
              lg: [
                "A A B B", 
                "A A C C", 
                "D E F G",
              ],
              // prettier-ignore
              md: [
                "A A B", 
                "D C C", 
                "E F G"
              ],
              // prettier-ignore
              sm: [
                "A A", 
                "B B", 
                "C C", 
                "D E", 
                "F G"
              ],
              // prettier-ignore
              xs: [
                "A", 
                "B", 
                "C", 
                "D", 
                "E", 
                "F", 
                "G"
              ],
            }}
          />
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
