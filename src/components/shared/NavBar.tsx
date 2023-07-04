import { APP_LINKS } from "../../helpers/constants";
import { useScreenWidth } from "../../hooks/useScreenWidth";
import { Link } from "react-router-dom";
import NavMenu from "./NavMenu";

export function NavBar() {
  const { width: screenWidth } = useScreenWidth();
  return (
    <>
      {/* nav-bar */}
      <div className="fixed z-10 top-0 w-full h-16 px-6 flex justify-between items-center bg-secondary text-secondary-content">
        <div className="w-[220px]">Felipe Chernicharo</div>
        {screenWidth > 600 ? (
          <div>
            {APP_LINKS.map(({ label, to }) => (
              <Link to={to}>
                <span className="mx-2">{label}</span>
              </Link>
            ))}
          </div>
        ) : null}

        <NavMenu />
      </div>
      {/* filler */}
      <div className="bg-base-100 h-16"></div>
    </>
  );
}
