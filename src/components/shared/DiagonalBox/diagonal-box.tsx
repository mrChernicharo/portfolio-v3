import { ReactNode } from "react";
import { classNames } from "../../../helpers/shared.helpers";
import "./diagonal-box.scss";

interface Props {
  children: ReactNode;
  className?: string;
  ascending?: boolean;
  angle?: number;
}

function DiagonalBox({ children, className = "", angle = 8 }: Props) {
  return (
    <div
      className={classNames("diagonal-box max-w-screen", className)}
      style={{
        transform: `skewY(${-angle}deg)`,
      }}
    >
      <div
        className="content mx-auto"
        style={{
          transform: `skewY(${angle}deg)`,
        }}
      >
        <div className="flex flex-col items-center justify-center">{children}</div>
      </div>
    </div>
  );
}

export default DiagonalBox;
