import { ReactNode } from "react";
import { NavBar } from "./NavBar";
import Footer from "./Footer/footer";

interface Props {
  children: ReactNode;
}

function Layout(props: Props) {
  const { children } = props;

  return (
    <div>
      <NavBar />

      <div className="">{children}</div>

      <Footer />
    </div>
  );
}

export default Layout;
