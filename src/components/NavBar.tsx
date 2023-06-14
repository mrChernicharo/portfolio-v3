import { useThemeContext } from "../context/ThemeContext";
import { defaultTheme } from "../helpers/theme.helpers";
import { APP_THEMES, AppTheme } from "../themes";
import ThemeMenu from "./ThemeMenu";
import AppSelect from "./AppSelect";
import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <div className="p-2 flex justify-between items-center bg-secondary text-secondary-content">
      <div>Felipe Chernicharo</div>

      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>

      <ThemeMenu />
    </div>
  );
}
