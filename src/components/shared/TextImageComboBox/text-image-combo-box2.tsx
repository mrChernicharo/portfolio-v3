import { useEffect, useRef } from "react";
import { schemaX } from "../../../helpers/img-grid-templates";
import ImageGrid2 from "../ImageGrid/image-grid2";
import { AppImage } from "../../../helpers/types";
import { useScreenWidth } from "../../../hooks/useScreenWidth";

interface Props {
  images: AppImage[];
  schema: any;
  title: string;
  body: string;
}

export default function TextImageComboBox2({ images, schema, title, body }: Props) {
  const { breakpoint } = useScreenWidth();

  const Sm = (
    <div className="bg-blue-400 p-4 grid grid-cols-1 h-full">
      <div className="bg-blue-100 p-4"></div>

      <div className="bg-blue-200 p-4"></div>

      <div className="bg-blue-300 p-4"></div>
    </div>
  );

  const Md = (
    <div className="bg-blue-400 p-4 grid grid-cols-2 h-full">
      <div className="bg-blue-100 p-4"></div>
      <div className="bg-blue-200 p-4"></div>

      <div className="bg-blue-200 p-4"></div>
      <div className="bg-blue-300 p-4"></div>

      <div className="bg-blue-300 p-4"></div>
      <div className="bg-blue-100 p-4"></div>
    </div>
  );

  const Lg = (
    <div className="bg-blue-400 p-4 grid grid-cols-3 h-full">
      <div className="bg-blue-100 p-4"></div>
      <div className="bg-blue-200 p-4"></div>
      <div className="bg-blue-300 p-4"></div>

      <div className="bg-blue-200 p-4"></div>
      <div className="bg-blue-300 p-4"></div>
      <div className="bg-blue-100 p-4"></div>

      <div className="bg-blue-300 p-4"></div>
      <div className="bg-blue-100 p-4"></div>
      <div className="bg-blue-200 p-4"></div>
    </div>
  );

  const Xl = (
    <div className="bg-blue-400 p-4 grid grid-cols-4 h-full">
      <div className="bg-blue-100 p-4"></div>
      <div className="bg-blue-200 p-4"></div>
      <div className="bg-blue-300 p-4"></div>
      <div className="bg-blue-100 p-4"></div>

      <div className="bg-blue-200 p-4"></div>
      <div className="bg-blue-300 p-4"></div>
      <div className="bg-blue-100 p-4"></div>
      <div className="bg-blue-200 p-4"></div>

      <div className="bg-blue-300 p-4"></div>
      <div className="bg-blue-100 p-4"></div>
      <div className="bg-blue-200 p-4"></div>
      <div className="bg-blue-300 p-4"></div>
    </div>
  );

  useEffect(() => {
    console.log(breakpoint);
  }, [breakpoint]);

  const maxWidths: Record<string, number> = {
    xs: 360,
    sm: 480,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1280,
    "3xl": 1280,
  };

  const textContentBasis: Record<string, string> = {
    xs: "100%",
    sm: "200px",
    md: "200px",
    lg: "200px",
    xl: "200px",
    "2xl": "200px",
    "3xl": "200px",
  };

  return (
    <div className="bg-blue-800 p-4">
      <div
        className="bg-blue-700 p-4 flex h-[400px] mx-auto"
        style={{
          maxWidth: maxWidths[breakpoint],
        }}
      >
        <div className="bg-blue-600 w-[200px]">
          <h1 className="h2-text leading-none">{title}</h1>
          <p>{body}</p>
          <p>{body}</p>
        </div>
        <div className="bg-blue-500 flex-1 shrink">
          {["xs"].includes(breakpoint) && null}
          {["sm"].includes(breakpoint) && Sm}
          {["md"].includes(breakpoint) && Md}
          {["lg"].includes(breakpoint) && Lg}
          {["xl", "2xl", "3xl"].includes(breakpoint) && Xl}
        </div>
      </div>
    </div>
  );
}
