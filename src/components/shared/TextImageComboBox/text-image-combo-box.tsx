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
    <div className="flex justify-center">
      <div className="bg-primary text-primary-content w-[250px] p-12">
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
        className="flex items-center w-[calc(100vw-250px)] max-w-[800px] bg-primary text-primary-content"
        ref={divRef01}
      >
        <ImageGrid2 gridTemplatesObj={schemaX} images={images} containerRef={divRef01} gap={10} />
      </div>
    </div>
  );
}
