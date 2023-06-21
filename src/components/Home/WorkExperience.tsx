import React from "react";

const jobs = [
  {
    company: "Genesys",
    title: "Senior Software Engineer",
    dates: "Jun.2022 - Present",
    location: "Rio de Janeiro, Brazil",
    description: "Genesys is the world leader in cloud contact center innovation...",
    skills: ["JavaScript", "TypeScript", "React", "Angular", "Ember", "Knockout", "Redux"],
    logo: "genesys-logo.png",
  },
  {
    company: "Qgiv",
    title: "Frontend Engineer",
    dates: "Dec.2021 - Jun.2022",
    location: "Florida, USA",
    description: "Qgiv is a web platform for nonprofit institutions. As a Frontend Engineer at Qgiv...",
    skills: ["JavaScript", "React", "Redux", "PHP", "MySQL", "JQuery"],
    logo: "qgiv-logo.png",
  },
  {
    company: "Versátil",
    title: "Software Engineer",
    dates: "June 2020 - Dec.2021",
    location: "Rio de Janeiro, Brazil",
    description: "Versátil is a company that developed B2B applications for Oi, a major telecom company in Brazil...",
    skills: ["TypeScript", "Angular", "D3.js", "Postgres", "AWS"],
    logo: "versatil-logo.png",
  },
  {
    company: "Clínica Laços",
    title: "Web Developer",
    dates: "May 2019 - Dec. 2020",
    location: "Rio de Janeiro, Brazil",
    description:
      "Clínica Laços is a Psychology clinic that pioneered online consultations. As a Web Developer at Clínica Laços...",
    skills: ["TypeScript", "Angular", "Firebase"],
    logo: "lacos-logo.png",
  },
];

const WorkExperience = () => {
  return (
    <div>
      <h1>Work Experience</h1>
      {jobs.map((job, index) => (
        <section key={index}>
          <header>
            <h2>{job.title}</h2>
            <h3>{job.company}</h3>
          </header>
          <p>
            <strong>{job.dates}</strong> | {job.location}
          </p>
          <p>{job.description}</p>
          <ul>
            {job.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
          <img src={job.logo} alt={`${job.company} Logo`} />
        </section>
      ))}
    </div>
  );
};

export default WorkExperience;
