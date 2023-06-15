import { useState } from "react";
import { APP_THEMES } from "./themes";
import { useFetch } from "./useFetch";
import { NavBar } from "./components/NavBar";
import { useThemeContext } from "./context/ThemeContext";
import TypingAnimation from "./components/TypingAnimation";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Projects from "./pages/Projects";

const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <div>404</div> },
  { path: "/projects", element: <Projects /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
]);

function App() {
  const { theme } = useThemeContext();

  return (
    <div data-theme={theme}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
