import { useEffect, useRef } from "react";
import { schemaX } from "../../../helpers/img-grid-templates";
import ImageGrid2 from "../ImageGrid/image-grid2";
import { AppImage } from "../../../helpers/types";
import { useScreenWidth } from "../../../hooks/useScreenWidth";
import { useDataContext } from "../../../context/DataContext";
import { getMiniUrl } from "../../../helpers/shared.helpers";
import ImageGrid3 from "../ImageGrid/image-grid3";

interface Props {
  images: AppImage[];
  schema: any;
  title: string;
  body: string;
}
const maxWidths: Record<string, number> = {
  xs: 360,
  sm: 480,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1280,
  "3xl": 1280,
};

const textContentWidth: Record<string, string> = {
  xs: "100%",
  sm: "200px",
  md: "220px",
  lg: "250px",
  xl: "300px",
  "2xl": "400px",
  "3xl": "500px",
};

export default function TextImageComboBox2({ images, schema, title, body }: Props) {
  const { breakpoint } = useScreenWidth();

  useEffect(() => {
    console.log(breakpoint);
  }, [breakpoint]);

  return (
    <div className="p-4 max-w-screen">
      <div
        className="p-4 bg-primary text-primary-content flex h-[400px] mx-auto"
        style={{ maxWidth: maxWidths[breakpoint] }}
      >
        <div className="overflow-hidden pr-4" style={{ width: textContentWidth[breakpoint] }}>
          <h1 className="h2-text leading-none">{title}</h1>
          <p>{body}</p>
        </div>

        {["xs"].includes(breakpoint) ? null : (
          <div className="flex-1 shrink">
            <ImageGrid3 gridSchema={schema} images={images} />
          </div>
        )}
      </div>
    </div>
  );
}

const Sm = () => (
  <div className="bg-blue-400 p-4 grid grid-cols-1 h-full">
    <div className="bg-blue-100"></div>

    <div className="bg-blue-200"></div>

    <div className="bg-blue-300"></div>
  </div>
);

const Md = () => (
  <div className="bg-blue-400 p-4 grid grid-cols-2 h-full">
    <div className="bg-blue-100"></div>
    <div className="bg-blue-200"></div>

    <div className="bg-blue-200"></div>
    <div className="bg-blue-300"></div>

    <div className="bg-blue-300"></div>
    <div className="bg-blue-100"></div>
  </div>
);

const Lg = () => (
  <div className="bg-blue-400 p-4 grid grid-cols-3 h-full">
    <div className="bg-blue-100"></div>
    <div className="bg-blue-200"></div>
    <div className="bg-blue-300"></div>

    <div className="bg-blue-200"></div>
    <div className="bg-blue-300"></div>
    <div className="bg-blue-100"></div>

    <div className="bg-blue-300"></div>
    <div className="bg-blue-100"></div>
    <div className="bg-blue-200"></div>
  </div>
);

const Xl = () => (
  <div className="bg-blue-400 p-4 grid grid-cols-4 h-full">
    <div className="bg-blue-100"></div>
    <div className="bg-blue-200"></div>
    <div className="bg-blue-300"></div>
    <div className="bg-blue-100"></div>

    <div className="bg-blue-200"></div>
    <div className="bg-blue-300"></div>
    <div className="bg-blue-100"></div>
    <div className="bg-blue-200"></div>

    <div className="bg-blue-300"></div>
    <div className="bg-blue-100 p-4"></div>
    <div className="bg-blue-200"></div>
    <div className="bg-blue-300"></div>
  </div>
);
