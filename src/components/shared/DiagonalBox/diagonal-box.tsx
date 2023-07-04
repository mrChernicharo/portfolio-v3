import { ReactNode } from "react";
import { classNames } from "../../../helpers/shared.helpers";
import "./diagonal-box.scss";

interface Props {
  children: ReactNode;
  className?: string;
}

function DiagonalBox({ children, className = "" }: Props) {
  return (
    <div className={classNames("diagonal-box", className)}>
      <div className="content">
        <div className="flex flex-col items-center justify-center">{children}</div>
      </div>
    </div>
  );
}

export default DiagonalBox;
