import { ReactNode } from "react";
import { NavBar } from "./NavBar";

interface Props {
  children: ReactNode;
}

function Layout(props: Props) {
  const { children } = props;

  return (
    <div>
      <NavBar />

      <div className="">
        {children}
      </div>
    </div>
  );
}

export default Layout;
