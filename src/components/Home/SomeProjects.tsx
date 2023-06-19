import { useDataContext } from "../../context/DataContext";
import { Card } from "../shared/Card";
import ProjectCard from "../shared/ProjectCard";

export default function SomeProjects() {
  const { projects, skills } = useDataContext();

  return (
    <div className="my-16">
      {projects.loading ? (
        <div>loading projects...</div>
      ) : (
        <div className="flex items-center justify-center">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {projects.data?.projects.slice(0, 16).map((proj, i) => (
              <ProjectCard key={proj.id} project={proj} imageUrl={skills.data?.skills[i].image_url!} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
