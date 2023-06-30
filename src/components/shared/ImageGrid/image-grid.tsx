import { getGridSchema } from "../../../helpers/shared.helpers";
import { AppImage } from "../../../helpers/types";
import { EnhancedImage } from "../enhanced-image";
import "./image-grid.scss";

interface Props {
  images: AppImage[];
  gridTemplateAreas: string;
}

const parseTemplateAreasStr = (templateStr: string) => {
  return templateStr
    .replaceAll(/" "/g, `,`)
    .replaceAll(/"/g, "")
    .split(",")
    .map((row) => row.split(" "));
};

const imgH = 200;
const imgW = 300;
const gap = 20;
export default function ImageGrid(props: Props) {
  const { images, gridTemplateAreas } = props;
  const areasMatrix = parseTemplateAreasStr(gridTemplateAreas);
  const gridAreas = getGridSchema(images, areasMatrix);

  const grid = gridAreas.map((cell, i) => ({
    ...cell,
    width: cell.w * imgW + (cell.w - 1) * gap,
    height: cell.h * imgH + (cell.h - 1) * gap,
  }));

  console.log({ images, areasMatrix, gridAreas });

  return (
    <div
      className="image-grid"
      style={{
        width: areasMatrix[0].length * imgW + (areasMatrix[0].length - 1) * gap,
        height: areasMatrix.length * imgH + (areasMatrix.length - 1) * gap,
        display: "grid",
        gridTemplateColumns: `repeat(${areasMatrix[0].length}, ${imgW}px)`,
        gridTemplateRows: `repeat(${areasMatrix.length}, ${imgH}px)`,
        gridTemplateAreas,
        gap,
      }}
    >
      {grid.map((cell, i) => {
        return (
          <div key={cell.area} style={{ gridArea: cell.area }} className="grid-item">
            <EnhancedImage url={cell.url} miniUrl={cell.mini_url} width={cell.width} height={cell.height} />
          </div>
        );
      })}
    </div>
  );
}
