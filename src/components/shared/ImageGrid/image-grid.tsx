import { classNames, parseGridAreas } from "../../../helpers/shared.helpers";
import { AppImage, GridImageArea } from "../../../helpers/types";
import { useScreenWidth } from "../../../hooks/useScreenWidth";
import { EnhancedImage } from "../EnhancedImage/enhanced-image";

interface Props {
  images: AppImage[];
  gridTemplatesObj: { [screen: string]: string[] };
  className?: string;
  imgHeight?: number;
  imgWidth?: number;
  gap?: number;
}

export default function ImageGrid({
  images,
  gridTemplatesObj,
  className = "",
  imgHeight = 200,
  imgWidth = 300,
  gap = 20,
}: Props) {
  const { breakpoint } = useScreenWidth();
  const gridTemplate = gridTemplatesObj[breakpoint];
  const gridAreas: Record<string, GridImageArea[]> = {};

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

  // console.log({ gridAreas, gridTemplatesObj, gridTemplate, grid });

  return (
    <div
      className={classNames(`image-grid mx-auto my-12 rounded-lg`, className)}
      style={{
        width: gridTemplate[0].split(" ").length * imgWidth + (gridTemplate[0].split(" ").length - 1) * gap + gap * 2,
        height: gridTemplate.length * imgHeight + (gridTemplate.length - 1) * gap + gap * 2,
        display: "grid",
        gridTemplateColumns: `repeat(${gridTemplate[0].split(" ").length}, ${imgWidth}px)`,
        gridTemplateRows: `repeat(${gridTemplate.length}, ${imgHeight}px)`,
        gridTemplateAreas: `"` + gridTemplate.join(`" "`) + `"`,
        gap,
        padding: gap + "px",
      }}
    >
      {grid.map((cell, i) => {
        return (
          <div key={cell.name} style={{ gridArea: cell.name }} className="grid-item rounded-lg">
            <EnhancedImage url={cell.url} miniUrl={cell.mini_url} width={cell.width} height={cell.height} />
          </div>
        );
      })}
    </div>
  );
}
