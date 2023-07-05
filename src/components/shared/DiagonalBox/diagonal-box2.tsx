import { ReactNode } from "react";
import { classNames } from "../../../helpers/shared.helpers";
import "./diagonal-box.scss";

interface Props {
  children: ReactNode;
  className?: string;
  ascending?: boolean;
  angle?: number;
}

function DiagonalBox({ children, className = "", ascending = true, angle = 8 }: Props) {
  return (
    <div
      className={classNames("diagonal-box max-w-screen", className)}
      style={{
        transform: `skewY(${ascending ? `-${angle}deg` : `${angle}deg`})`,
      }}
    >
      <div
        className="content mx-auto"
        style={{
          transform: `skewY(${ascending ? `${angle}deg` : `-${angle}deg`})`,
        }}
      >
        <div className="flex flex-col items-center justify-center">{children}</div>
      </div>
    </div>
  );
}

export default DiagonalBox;

//   --angle: -11deg;
//   /* Make sure we always have the absolute value */
//   /* negative values don't work with CSS tan() */
//   --abs-angle: max(var(--angle), var(--angle) * -1);
//   --tan-alpha: tan(var(--abs-angle));
//   --skew-padding: calc(var(--width) * var(--tan-alpha) / 2);
//   --clip-padding: calc(var(--full-width) * var(--tan-alpha) / 2);
