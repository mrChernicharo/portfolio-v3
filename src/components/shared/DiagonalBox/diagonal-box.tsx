import { ReactNode } from "react";
import { classNames } from "../../../helpers/shared.helpers";
import "./diagonal-box.scss";

interface Props {
  children: ReactNode;
  className?: string;
  ascending?: boolean;
}

function DiagonalBox({ children, className = "", ascending = true }: Props) {
  return (
    <div
      className={classNames("diagonal-box max-w-screen", className)}
      style={{
        transform: `skewY(${ascending ? "-11deg" : "11deg"})`,
      }}
    >
      <div
        className="content mx-auto"
        style={{
          transform: `skewY(${ascending ? "11deg" : "-11deg"})`,
        }}
      >
        <div className="flex flex-col items-center justify-center">{children}</div>
      </div>
    </div>
  );
}

export default DiagonalBox;
