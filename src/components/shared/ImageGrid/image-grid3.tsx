import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AppImage, GridImageArea } from "../../../helpers/types";
import { useScreenWidth } from "../../../hooks/useScreenWidth";
import { parseGridAreas } from "../../../helpers/shared.helpers";
import { EnhancedImage } from "../EnhancedImage/enhanced-image";
import { schemaX } from "../../../helpers/img-grid-templates";

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
    // setTimeout(() => {

    // }, 200);

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

interface UseGridProcessProps {
  images: AppImage[];
  gridSchema: { [maxSize: number]: string[] };
  availWidth: number;
  availHeight: number;
  gap: number;
}

function useGridProcess({ images, gridSchema, availWidth, availHeight, gap }: UseGridProcessProps) {
  const gridAreas: Record<string, GridImageArea[]> = {};

  const breakpoints = Object.keys(gridSchema)
    .map(Number)
    .sort((a, b) => a - b);

  const breakpoint = (() => {
    let [min, max, breakpoint] = [0, Infinity, 0];
    for (let i = 0; i < breakpoints.length; i++) {
      max = breakpoints[i];

      if (availWidth >= min && availWidth < max) {
        breakpoint = max;
      }
      min = breakpoints[i];
    }
    if (!breakpoint) breakpoint = breakpoints.at(-1) as number;
    return breakpoint;
  })();

  const gridRows = gridSchema[breakpoint].length;
  const gridCols = gridSchema[breakpoint][0].split(" ").length;

  const [imgWidth, imgHeight] = [
    (availWidth - (gridCols - 1) * gap) / gridCols,
    (availHeight - (gridRows - 1) * gap) / gridRows,
  ];

  for (const [k, gridTemplate] of Object.entries(gridSchema)) {
    gridAreas[k] = parseGridAreas(gridTemplate).map((gridArea, i) => ({
      ...gridArea,
      url: images[i % images.length]?.url || "",
      mini_url: images[i % images.length]?.mini_url || "",
      width: gridArea.w * imgWidth + (gridArea.w - 1) * gap,
      height: gridArea.h * imgHeight + (gridArea.h - 1) * gap,
    }));
  }
  const grid = gridAreas[breakpoint];

  return { breakpoint, grid, gridCols, gridRows };
}
