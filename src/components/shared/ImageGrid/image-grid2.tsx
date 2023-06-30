import { parseGridAreas } from "../../../helpers/shared.helpers";
import { AppImage, GridArea, GridImageArea } from "../../../helpers/types";
import { EnhancedImage } from "../enhanced-image";
import "./image-grid.scss";

interface Props {
  images: AppImage[];
  gridTemplatesObj: { [screen: string]: string[] };
  imgHeight?: number;
  imgWidth?: number;
  gap?: number;
}

export default function ImageGrid({ images, gridTemplatesObj, imgHeight = 200, imgWidth = 300, gap = 20 }: Props) {
  const gridTemplates: Record<string, GridImageArea[]> = {};
  const screenSize = "lg";

  for (const [k, gridTemplate] of Object.entries(gridTemplatesObj)) {
    gridTemplates[k] = parseGridAreas(gridTemplate).map((gridArea, i) => ({
      ...gridArea,
      url: images[i % images.length].url,
      mini_url: images[i % images.length].mini_url,
      width: gridArea.w * imgWidth + (gridArea.w - 1) * gap,
      height: gridArea.h * imgHeight + (gridArea.h - 1) * gap,
    }));
  }

  const grid = gridTemplates[screenSize];

  console.log({ gridTemplates, gridTemplatesObj, grid });

  return (
    <div
      className="image-grid"
      style={{
        // width: gridTemplatesObj[screenSize].length * imgWidth + (gridTemplatesObj[screenSize].length - 1) * gap,
        height: gridTemplatesObj[screenSize].length * imgHeight + (gridTemplatesObj[screenSize].length - 1) * gap,
        display: "grid",
        gridTemplateColumns: `repeat(${gridTemplatesObj[screenSize].length}, ${imgWidth}px)`,
        gridTemplateRows: `repeat(${gridTemplatesObj[screenSize].length}, ${imgHeight}px)`,
        gridTemplateAreas: `"` + gridTemplatesObj[screenSize].join(`" "`) + `"`,
        gap,
      }}
    >
      {grid.map((cell, i) => {
        return (
          <div key={cell.name} style={{ gridArea: cell.name }} className="grid-item">
            <EnhancedImage url={cell.url} miniUrl={cell.mini_url} width={cell.width} height={cell.height} />
          </div>
        );
      })}
    </div>
  );
}
