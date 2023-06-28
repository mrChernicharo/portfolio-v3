import { AppImage } from "../../../helpers/types";
import { EnhancedImage } from "../enhanced-image";

interface Props {
  images: AppImage[];
}

export default function ImageGrid(props: Props) {
  const { images } = props;

  return (
    <div>
      {images.map((img) => (
        <EnhancedImage url={img.url} miniUrl={img.mini_url} width={img.width} height={img.height} />
      ))}
    </div>
  );
}
