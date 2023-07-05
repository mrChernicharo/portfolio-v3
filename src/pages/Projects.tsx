import { useEffect, useRef } from "react";
import { NavBar } from "../components/shared/NavBar";
import { useFetch } from "../useFetch";
import { AppImage, Project } from "../helpers/types";
import { useDataContext } from "../context/DataContext";
import SomeProjects from "../components/Home/SomeProjects";
import ProjectDisplay from "../components/shared/ProjectDisplay/project-display";
import ImageGrid2 from "../components/shared/ImageGrid/image-grid2";
import { schemaX, template03 } from "../helpers/img-grid-templates";
import { getMiniUrl } from "../helpers/shared.helpers";

interface Props {}

function Projects(props: Props) {
  const {} = props;
  const divRef = useRef<HTMLDivElement>(null);
  const { projects, mainProjects } = useDataContext();

  const imgs = projects
    .filter((p) => !!p.image_urls)
    .map((p) => p.image_urls)
    .flat()
    .map((img) => ({ url: img ?? "", mini_url: getMiniUrl(img ?? ""), width: 300, height: 200 })) as AppImage[];

  return (
    <div>
      <div className="ml-4">Projects</div>

      <div className="flex max-w-screen w-screen">
        <div className="bg-blue-300 w-[calc(100vw-200px)]" ref={divRef}>
          <ImageGrid2 gridTemplatesObj={schemaX} images={imgs.slice(50, 60)} containerRef={divRef} gap={10} />
        </div>
        <div className="bg-red-300 w-[200px]">
          <div>blah blah blah blah</div>
          <div>blah blah blah blah</div>
          <div>blah blah blah blah blah blah blah blah</div>
          <div>blah blah blah blah</div>
          <div>blah blah blah blah</div>
          <div>blah blah blah blah</div>
          <div>blah blah blah blah</div>
          <div>blah blah blah blah</div>
        </div>
      </div>

      {mainProjects.map((proj, i) => (
        <ProjectDisplay key={proj.id} project={proj} isEven={i % 2 == 0} />
      ))}
      <SomeProjects count={100} />
    </div>
  );
}

export default Projects;
