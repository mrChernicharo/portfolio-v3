import { useState } from "react";
import { APP_THEMES } from "./themes";
import { useFetch } from "./useFetch";
import { NavBar } from "./components/NavBar";
import { useThemeContext } from "./context/ThemeContext";
import TypingAnimation from "./components/TypingAnimation";

export interface Job {
  id: string;
  title: string;
  type: string;
  company: string;
  company_img_url: string;
  company_website_url: string;
  company_location: string;
  company_address: string;
  started_at: string;
  ended_at: string;
  description: string;
}

function App() {
  const { theme } = useThemeContext();

  const { data, loading, error } = useFetch<{ jobs: Job[] }>(
    "https://string7-data-api.onrender.com/jobs"
  );

  return (
    <div data-theme={theme}>
      <NavBar />
      <h1 className="text-[2rem] font-semibold">Hello World</h1>

      {/* <div className="text-primary text-xl font-bold">hello</div>
      <div className="text-secondary text-xl font-bold">hello</div>
      <div className="text-accent text-xl font-bold">hello</div> */}


      <TypingAnimation />

      {/* <div className="flex flex-col">
        {themes.map((theme) => (
          <button
            className="btn rounded-none"
            data-theme={theme}
            onClick={() => {
              setTheme(theme);
              document.documentElement.setAttribute("data-theme", theme);
            }}
          >
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <div className="w-2 h-2 rounded-full bg-secondary"></div>
            <div className="w-2 h-2 rounded-full bg-accent"></div>
            <div>{theme}</div>
          </button>
        ))}
      </div> */}

      {/* {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {data?.jobs.map((job) => (
            <div key={job.id}>
              {job.title} at {job.company} from{' '}
              {new Date(job.started_at).toLocaleDateString()}{' '}
              {job.ended_at
                ? `to ${new Date(job.ended_at).toLocaleDateString()}`
                : " until today..."}

                <div>
                  <img src={job.company_img_url} />
                </div>
            </div>
          ))}
        </div>
      )} */}
    </div>
  );
}

export default App;
