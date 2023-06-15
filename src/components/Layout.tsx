import React, { ReactNode } from "react";
import { NavBar } from "./NavBar";

interface Props {
  children: ReactNode;
}

function Layout(props: Props) {
  const { children } = props;

  return (
    <div>
      <NavBar />

      <div className="max-w-[900px]  mx-auto border-2 border-dashed border-red-500">
        {children}
      </div>
    </div>
  );
}

export default Layout;
