import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  width?: number | string;
}

export function Card({ children, width = 320 }: CardProps) {
  return (
    <div className="card bg-base-200 shadow-xl" style={{ width }}>
      {children}
    </div>
  );
}
