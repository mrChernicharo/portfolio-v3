import { useDataContext } from "../../context/DataContext";

function Skills() {
  const { skills } = useDataContext();

  return (
    <>
      <ul className="mx-auto grid grid-cols-12 p-6 md:w-[800px]">
        {skills.map((skill) => (
          <li className="md:h-12" key={skill.id}>
            <img src={skill.image_url} width={32} height={32} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Skills;
