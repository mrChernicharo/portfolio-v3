import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AppImage, GridImageArea } from "../../../helpers/types";
import { useScreenWidth } from "../../../hooks/useScreenWidth";
import { parseGridAreas } from "../../../helpers/shared.helpers";
import { EnhancedImage } from "../EnhancedImage/enhanced-image";
import { schemaX } from "../../../helpers/img-grid-templates";
import { useGridProcess } from "../../../hooks/useGridProcess";

interface Props {
  images: AppImage[];
  gridSchema: { [maxSize: number]: string[] };
  className?: string;
  imgHeight?: number;
  imgWidth?: number;
  gap?: number;
  //   padding?: number;
}

export default function ImageGrid3({ images, gridSchema, gap = 10 }: Props) {
  const { width: screenWidth } = useScreenWidth();
  const containerRef = useRef<HTMLDivElement>(null);

  const [availWidth, setAvailWidth] = useState(0);
  const [availHeight, setAvailHeight] = useState(0);

  const { breakpoint, grid, gridCols, gridRows } = useGridProcess({ images, gridSchema, availWidth, availHeight, gap });

  useEffect(() => {
    if (!containerRef.current?.getBoundingClientRect) return;
    const { width, height } = containerRef.current.getBoundingClientRect();

    setAvailWidth(width);
    setAvailHeight(height);
  }, [screenWidth]);

  return (
    <div
      className="h-full"
      ref={containerRef}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${gridCols}, 1fr`,
        gridTemplateRows: `repeat(${gridRows}, 1fr)`,
        gridTemplateAreas: `"` + gridSchema[breakpoint].join(`" "`) + `"`,
        gap,
      }}
    >
      {grid.map((cell, i) => {
        return (
          <div key={cell.name} style={{ gridArea: cell.name, overflow: "hidden" }}>
            <EnhancedImage url={cell.url} miniUrl={cell.mini_url} width="100%" height={cell.height} />
          </div>
        );
      })}
    </div>
  );
}
