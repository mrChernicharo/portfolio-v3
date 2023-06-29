import { AppImage } from "../../../helpers/types";
import { EnhancedImage } from "../enhanced-image";
import "./image-grid.scss";

interface Props {
  images: AppImage[];
}

const gridA = ["A", "B", "C", "D", "B", "E", "F", "F", "E"];

export default function ImageGrid(props: Props) {
  const { images } = props;
  console.log({ images });

  return (
    <div className="image-grid">
      {images.map((img, i) => {
        const gridArea = gridA[i];
        return (
          <div key={img.url} style={{ gridArea }} className="grid-item bg-red-600">
            <EnhancedImage url={img.url} miniUrl={img.mini_url} width={img.width} height={img.height} />
          </div>
        );
      })}
    </div>
  );
}
