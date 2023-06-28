import { useRef, useState } from "react";

interface EnhancedImageProps {
  url: string;
  miniUrl: string;
  width?: number;
  height?: number;
}

export function EnhancedImage({ url, miniUrl, width, height }: EnhancedImageProps) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef(null);

  return (
    <div
      className={`ImgWrapper ${loaded ? "Loaded" : ""}`}
      style={{
        backgroundImage: `url(${miniUrl})`,
        ...(width && {width}),
        ...(height && {height}),
      }}
    >
      <img
        src={url}
        ref={imgRef}
        className={`Img ${loaded ? "Loaded" : ""}`}
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
