import { ReactNode } from "react";

export function Card(props: { children: ReactNode }) {
  return <div className="card w-96 bg-base-200 shadow-xl">{props.children}</div>;
}
