import { useDataContext } from "../../context/DataContext";
import { Card } from "../shared/Card";

export default function SomeProjects() {
  const { projects, skills } = useDataContext();

  return (
    <div>
      {projects.loading ? (
        <div>loading projects...</div>
      ) : (
        <div className="grid">
          {projects.data?.projects.slice(0, 20).map((proj, i) => (
            <Card key={proj.id}>
              <figure>
                <img src={skills.data?.skills[i].image_url} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{proj.name}</h2>
                <p>{proj.description == "null" ? "" : proj.description}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
