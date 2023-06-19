import ThemeMenu from "./ThemeMenu";
import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <>
      {/* nav-bar */}
      <div className="fixed top-0 w-full h-16 px-6 flex justify-between items-center bg-secondary text-secondary-content">
        <div className="w-[220px]">Felipe Chernicharo</div>

        <div>
          <Link to="/">
            <span className="mx-2">Home</span>
          </Link>
          <Link to="/projects">
            <span className="mx-2">Projects</span>
          </Link>
          <Link to="/about">
            <span className="mx-2">About</span>
          </Link>
          <Link to="/contact">
            <span className="mx-2">Contact</span>
          </Link>
        </div>

        <ThemeMenu />
      </div>
      {/* filler */}
      <div className="bg-green-600 h-16"></div>
    </>
  );
}
