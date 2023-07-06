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
import TextImageComboBox from "../components/shared/TextImageComboBox/text-image-combo-box";
import TextImageComboBox2 from "../components/shared/TextImageComboBox/text-image-combo-box2";

interface Props {}

function Projects(props: Props) {
  const {} = props;
  const divRef01 = useRef<HTMLDivElement>(null);
  const divRef02 = useRef<HTMLDivElement>(null);
  const { projects, mainProjects } = useDataContext();

  const imgs = projects
    .filter((p) => !!p.image_urls)
    .map((p) => p.image_urls)
    .flat()
    .map((img) => ({ url: img ?? "", mini_url: getMiniUrl(img ?? ""), width: 300, height: 200 })) as AppImage[];

  return (
    <div>
      <div className="ml-4">Projects</div>

      {/* <TextImageComboBox images={imgs.slice(64, 70)} /> */}

      <TextImageComboBox2
        images={imgs.slice(64, 70)}
        schema={schemaX}
        title="Hello world"
        body="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore culpa amet obcaecati"
      />

      <h1>Yes sir,</h1>
      <h1>I can handle complex layouts!</h1>

      {/* <TextImageComboBox images={imgs.slice(50, 60)} /> */}

      {/* {mainProjects.map((proj, i) => (
        <ProjectDisplay key={`proj-${proj.id}-${i}`} project={proj} isEven={i % 2 == 0} />
      ))} */}
      <SomeProjects count={100} />
    </div>
  );
}

export default Projects;
