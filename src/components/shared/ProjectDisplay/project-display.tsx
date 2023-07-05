import { useEffect, useRef } from "react";
import { template03 } from "../../../helpers/img-grid-templates";
import { classNames, getMiniUrl } from "../../../helpers/shared.helpers";
import { MainProject } from "../../../helpers/types";
import { useParentContainer } from "../../../hooks/useParentContainer";
import { useScreenWidth } from "../../../hooks/useScreenWidth";
import { EnhancedImage } from "../EnhancedImage/enhanced-image";
import ImageGrid from "../ImageGrid/image-grid";
import "./project-display.scss";

interface Props {
  project: MainProject;
  isEven: boolean;
}

export default function ProjectDisplay({ project, isEven = false }: Props) {
  const divRef = useRef<HTMLDivElement>(null);
  const {
    name,
    skills,
    created_at,
    description,
    github_url,
    id,
    language,
    site_url,
    updated_at,
    image_urls = [],
    video_url,
  } = project;

  const { breakpoint } = useScreenWidth();
  const { rect: parentRect } = useParentContainer(divRef);

  // useEffect(() => {
  //   console.log({ parentRectW: parentRect?.width, divParent: divRef.current?.parentElement });
  // }, [parentRect]);

  return (
    <div className="max-w-screen">
      {isEven ? (
        <div className="w-0 h-0 border-b-[100px] border-b-primary border-l-[100vw] border-l-transparent"></div>
      ) : null}
      <div className={classNames("grid grid-cols-2 border", `${isEven ? "bg-primary" : "bg-secondary"}`)}>
        <section>
          <div>{name}</div>
          <div className="skills-container">
            {skills.filter(Boolean).map((skill) => (
              <div key={`${name} ${skill.id}`}>
                <img src={skill.image_url} width={36} height={36} alt={skill.name} />
              </div>
            ))}
          </div>
          <div className="">{description}</div>
        </section>

        {/* <section className="border justify-self-end"> */}
        <section className="border ">
          <div className="imgs-container" ref={divRef}>
            <p>fasjkflash</p>
            {/* <ImageGrid
              images={image_urls.map((url) => ({ url, mini_url: getMiniUrl(url) }))}
              imgHeight={100}
              imgWidth={150}
              gridTemplatesObj={template03}
            /> */}
          </div>
        </section>
      </div>
      {!isEven ? (
        <div className="w-0 h-0 -mb-20 border-t-[100px] border-t-secondary border-r-[100vw] border-r-transparent"></div>
      ) : null}
    </div>
  );
}
