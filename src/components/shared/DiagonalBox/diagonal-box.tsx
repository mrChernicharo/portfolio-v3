import { ReactNode } from "react";
import { classNames } from "../../../helpers/shared.helpers";
import "./diagonal-box.scss";

interface Props {
  children: ReactNode;
  className?: string;
  ascending?: boolean;
  slope?: number;
}

function DiagonalBox({ children, className = "", ascending = true, slope = 11 }: Props) {
  return (
    <div
      className={classNames("diagonal-box max-w-screen", className)}
      style={{
        transform: `skewY(${ascending ? `-${slope}deg` : `${slope}deg`})`,
      }}
    >
      <div
        className="content mx-auto"
        style={{
          transform: `skewY(${ascending ? `${slope}deg` : `-${slope}deg`})`,
        }}
      >
        <div className="flex flex-col items-center justify-center">{children}</div>
      </div>
    </div>
  );
}

export default DiagonalBox;
