import { RefObject, useEffect } from "react";
import { classNames, parseGridAreas } from "../../../helpers/shared.helpers";
import { AppImage, GridImageArea } from "../../../helpers/types";
import { useParentContainer } from "../../../hooks/useParentContainer";
import { useScreenWidth } from "../../../hooks/useScreenWidth";
import { EnhancedImage } from "../EnhancedImage/enhanced-image";

interface Props {
  images: AppImage[];
  gridTemplatesObj: { [maxSize: number]: string[] };
  containerRef: RefObject<HTMLDivElement>;
  className?: string;
  imgHeight?: number;
  imgWidth?: number;
  gap?: number;
  padding?: number;
}

// export type GridArea = {
//   name: string;
//   w: number;
//   h: number;
//   x: number;
//   y: number;
// };

// export type GridImageArea = GridArea & { url: string; mini_url: string; width: number; height: number };

export default function ImageGrid2({
  images,
  gridTemplatesObj,
  containerRef,
  className = "",
  gap = 20,
  padding = 10,
}: Props) {
  const { rect } = useParentContainer(containerRef);

  if (!rect?.width) return null;

  const gridAreas: Record<string, GridImageArea[]> = {};

  const breakpoints = Object.keys(gridTemplatesObj)
    .map(Number)
    .sort((a, b) => a - b);

  const breakpoint = (() => {
    let [min, max, breakpoint] = [0, Infinity, 0];
    for (let i = 0; i < breakpoints.length; i++) {
      max = breakpoints[i];

      if (rect.width >= min && rect.width < max) {
        breakpoint = max;
      }
      min = breakpoints[i];
    }
    if (!breakpoint) breakpoint = breakpoints.at(-1) as number;
    return breakpoint;
  })();

  const gridRows = gridTemplatesObj[breakpoint].length;
  const gridCols = gridTemplatesObj[breakpoint][0].split(" ").length;

  const [imgWidth, imgHeight] = [
    (rect.width - (gridCols - 1) * gap - padding * 2) / gridCols,
    (rect.height - (gridRows - 1) * gap - padding * 2) / gridRows,
  ];

  for (const [k, gridTemplate] of Object.entries(gridTemplatesObj)) {
    gridAreas[k] = parseGridAreas(gridTemplate).map((gridArea, i) => ({
      ...gridArea,
      url: images[i % images.length]?.url || "",
      mini_url: images[i % images.length]?.mini_url || "",
      width: gridArea.w * imgWidth + (gridArea.w - 1) * gap,
      height: gridArea.h * imgHeight + (gridArea.h - 1) * gap,
    }));
  }
  const grid = gridAreas[breakpoint];

  return (
    <div
      className={classNames(`image-grid mx-auto rounded-lg`, className)}
      style={{
        width: gridCols * imgWidth + (gridCols - 1) * gap,
        height: gridRows * imgHeight + (gridRows - 1) * gap,
        display: "grid",
        gridTemplateColumns: `repeat(${gridCols}, 1fr`,
        gridTemplateRows: `repeat(${gridRows}, 1fr)`,
        gridTemplateAreas: `"` + gridTemplatesObj[breakpoint].join(`" "`) + `"`,
        gap,
      }}
    >
      {grid.map((cell, i) => {
        return (
          <div key={cell.name} style={{ gridArea: cell.name }}>
            <EnhancedImage url={cell.url} miniUrl={cell.mini_url} width={cell.width} height={cell.height} />
          </div>
        );
      })}
    </div>
  );
}
