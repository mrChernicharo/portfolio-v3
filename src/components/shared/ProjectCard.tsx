import React from "react";
import { Project } from "../../helpers/types";
import { Card } from "./Card";

interface Props {
  project: Project;
  imageUrl: string;
}

function ProjectCard(props: Props) {
  const { project, imageUrl } = props;

  return (
    <Card>
      <figure>
        <img src={imageUrl} alt={project.name} width={96 * 4} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{project.name}</h2>
        <p>{project.description == "null" ? "" : project.description}</p>
        <div className="card-actions justify-end">
          {project.site_url ? <button className="btn btn-accent">visit live</button> : null}
          {project.github_url ? <button className="btn btn-primary">github repo</button> : null}
        </div>
      </div>
    </Card>
  );
}

export default ProjectCard;
