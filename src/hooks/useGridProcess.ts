import { parseGridAreas } from "../helpers/shared.helpers";
import { AppImage, GridImageArea } from "../helpers/types";

interface UseGridProcessProps {
  images: AppImage[];
  gridSchema: { [maxSize: number]: string[] };
  availWidth: number;
  availHeight: number;
  gap: number;
}

export function useGridProcess({ images, gridSchema, availWidth, availHeight, gap }: UseGridProcessProps) {
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
