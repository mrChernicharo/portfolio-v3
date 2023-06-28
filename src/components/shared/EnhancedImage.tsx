import { useRef, useState } from "react";

interface EnhancedImageProps {
  url: string;
  miniUrl: string;
  width: number;
  height: number;
}

function EnhancedImage({ url, miniUrl, width, height }: EnhancedImageProps) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef(null);

  return (
    <div
      className={`ImgWrapper ${loaded ? "Loaded" : ""}`}
      style={{
        backgroundImage: `url(${miniUrl})`,
        width,
        height,
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

// .ImgWrapper {
//   position: relative;
//   background-color: #555;
//   background-size: cover;
//   background-position: center;
// }

// .ImgWrapper::before {
//   content: "";
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   background-color: #fff;
//   z-index: 20;
//   opacity: 0;
//   animation: white-pulse 2s infinite;
// }
// .ImgWrapper.Loaded::before {
//   animation: none;
// }
// @keyframes white-pulse {
//   0% {
//     opacity: 0;
//   }
//   50% {
//     opacity: 0.15;
//   }
//   100% {
//     opacity: 0;
//   }
// }

// .Img {
//   min-height: 200px;
//   display: block;
//   object-fit: cover;
//   object-position: center;
//   opacity: 0;
//   transition: opacity 1s;
// }

// .Img.Loaded {
//   opacity: 1;
// }
