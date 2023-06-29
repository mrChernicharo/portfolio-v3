import { getGridSchema } from "../../../helpers/shared.helpers";
import { AppImage } from "../../../helpers/types";
import { EnhancedImage } from "../enhanced-image";
import "./image-grid.scss";

interface Props {
  images: AppImage[];
}

const templateA = `"A B C" "D B E" "F F E"`;
const schemaA = templateA
  .replaceAll(/" "/g, `,`)
  .replaceAll(/"/g, "")
  .split(",")
  .map((row) => row.split(" "));

const templateB = `"A B B" "C C D" "E F D"`;
const schemaB = templateB
  .replaceAll(/" "/g, `,`)
  .replaceAll(/"/g, "")
  .split(",")
  .map((row) => row.split(" "));

const imgH = 200;
const imgW = 300;
const gap = 20;
export default function ImageGrid(props: Props) {
  const { images } = props;

  const gridA = getGridSchema(schemaA).map((cell, i) => ({
    area: cell.area,
    url: images[i].url,
    mini_url: images[i].mini_url,
    width: cell.w * imgW + (cell.w - 1) * gap,
    height: cell.h * imgH + (cell.h - 1) * gap,
  }));

  const gridB = getGridSchema(schemaB).map((cell, i) => ({
    area: cell.area,
    url: images[i].url,
    mini_url: images[i].mini_url,
    width: cell.w * imgW + (cell.w - 1) * gap,
    height: cell.h * imgH + (cell.h - 1) * gap,
  }));

  console.log({ images });

  return (
    <>
      <div
        className="image-grid"
        style={{
          width: schemaA[0].length * imgW + (schemaA[0].length - 1) * gap,
          height: schemaA.length * imgH + (schemaA.length - 1) * gap,
          display: "grid",
          gridTemplateColumns: `repeat(${schemaA[0].length}, ${imgW}px)`,
          gridTemplateRows: `repeat(${schemaA.length}, ${imgH}px)`,
          gridTemplateAreas: templateA,
          gap,
        }}
      >
        {gridA.map((cell, i) => {
          return (
            <div key={cell.url} style={{ gridArea: cell.area }} className="grid-item">
              <EnhancedImage url={cell.url} miniUrl={cell.mini_url} width={cell.width} height={cell.height} />
            </div>
          );
        })}
      </div>

      <div
        className="image-grid"
        style={{
          width: schemaB[0].length * imgW + (schemaB[0].length - 1) * gap,
          height: schemaB.length * imgH + (schemaB.length - 1) * gap,
          display: "grid",
          gridTemplateColumns: `repeat(${schemaB[0].length}, ${imgW}px)`,
          gridTemplateRows: `repeat(${schemaB.length}, ${imgH}px)`,
          gridTemplateAreas: templateB,
          gap,
        }}
      >
        {gridB.map((cell, i) => {
          return (
            <div key={cell.url} style={{ gridArea: cell.area }} className="grid-item">
              <EnhancedImage url={cell.url} miniUrl={cell.mini_url} width={cell.width} height={cell.height} />
            </div>
          );
        })}
      </div>
    </>
  );
}
