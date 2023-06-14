import { useState } from "react";
import { APP_THEMES } from "./themes";
import { useFetch } from "./useFetch";
import { NavBar } from "./components/NavBar";
import { useThemeContext } from "./context/ThemeContext";
import TypingAnimation from "./components/TypingAnimation";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <NavBar />
        <h1 className="text-[2rem] font-semibold">Hello World</h1>
        <TypingAnimation />
      </div>
    ),
    errorElement: <div>404</div>,
  },
  {
    path: "/projects",
    element: (
      <div>
        <NavBar />
        Hello projects!
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <NavBar />
        Hello about!
      </div>
    ),
  },
  {
    path: "/contact",
    element: (
      <div>
        <NavBar />
        Hello contact!
      </div>
    ),
  },
]);

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

  const { data, loading, error } = useFetch<{ jobs: Job[] }>("https://string7-data-api.onrender.com/jobs");

  return (
    <div data-theme={theme}>
      <RouterProvider router={router} />

      {/*  */}
    </div>
  );
}

export default App;
