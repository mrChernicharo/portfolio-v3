import { useRef, useState } from "react";
import "./enhanced-image.scss";

interface EnhancedImageProps {
  url: string;
  miniUrl: string;
  width?: number;
  height?: number;
}

export function EnhancedImage({ url, miniUrl, width = 300, height = 200 }: EnhancedImageProps) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef(null);

  return (
    <div
      className={`img-wrapper ${loaded ? "loaded" : ""} z-[1] rounded-lg`}
      style={{ width, height, backgroundImage: `url(${miniUrl})` }}
    >
      <img
        src={url}
        ref={imgRef}
        className={`image rounded-lg ${loaded ? "loaded" : ""}`}
        style={{ width, height }}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        onLoad={(e) => {
          setLoaded(true);
        }}
      />
    </div>
  );
}
