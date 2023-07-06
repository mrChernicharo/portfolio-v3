import { useRef } from "react";
import { schemaX } from "../../../helpers/img-grid-templates";
import ImageGrid2 from "../ImageGrid/image-grid2";
import { AppImage } from "../../../helpers/types";

interface Props {
  images: AppImage[];
}

export default function TextImageComboBox({ images }: Props) {
  const divRef01 = useRef<HTMLDivElement>(null);
  return (
    <div className="bg-blue-600 p-6">
      <div className="flex justify-center p-6 bg-red-500 ">
        <div className="bg-primary text-primary-content w-[250px] ">
          <div>blah blah blah blah</div>
          <div>blah blah blah blah</div>
          <div>blah blah blah blah blah</div>
          <div>blah blah blah blah</div>
          <div>blah blah blah blah</div>
          <div>blah blah blah blah</div>
          <div>blah blah blah blah</div>
          <div>blah blah blah blah</div>
          <div>blah blah blah blah</div>
          <div>blah blah blah blah</div>
          <div>blah blah blah blah</div>
          <div>blah blah blah blah</div>
        </div>

        <div
          className="flex items-center w-[calc(100vw-250px)] max-w-[800px] bg-primary text-primary-content border-8"
          ref={divRef01}
        >
          <ImageGrid2 gridTemplatesObj={schemaX} images={images} containerRef={divRef01} gap={6} />
        </div>
      </div>
    </div>
  );
}
