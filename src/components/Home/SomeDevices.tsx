import { DeviceFrameset } from "react-device-frameset";
import "../../../public/marvel-devices.min.css";
import ImageGrid from "../shared/ImageGrid/image-grid";
import { template03 } from "../../helpers/img-grid-templates";
import { useDataContext } from "../../context/DataContext";
import { getMiniUrl } from "../../helpers/shared.helpers";
import { AppImage } from "../../helpers/types";

// | { device: 'iPhone X', landscape?: boolean, width?: number, height?: number, zoom?: number }
// | { device: 'iPhone 8', color: 'black' | 'silver' | 'gold', landscape?: boolean, width?: number, height?: number, zoom?: number }
// | { device: 'iPhone 8 Plus', color: 'black' | 'silver' | 'gold', landscape?: boolean, width?: number, height?: number, zoom?: number }
// | { device: 'iPhone 5s', color: 'black' | 'silver' | 'gold', landscape?: boolean, width?: number, height?: number, zoom?: number }
// | { device: 'iPhone 5c', color: 'white' | 'red' | 'yellow' | 'green' | 'blue', landscape?: boolean, width?: number, height?: number, zoom?: number }
// | { device: 'iPhone 4s', color: 'black' | 'silver', landscape?: boolean, width?: number, height?: number, zoom?: number }
// | { device: 'Galaxy Note 8', landscape?: boolean, width?: number, height?: number, zoom?: number }
// | { device: 'Nexus 5', landscape?: boolean, width?: number, height?: number, zoom?: number }
// | { device: 'Lumia 920', color: 'black' | 'white' | 'yellow' | 'red' | 'blue', landscape?: boolean, width?: number, height?: number, zoom?: number }
// | { device: 'Samsung Galaxy S5', color: 'white' | 'black', landscape?: boolean, width?: number, height?: number, zoom?: number }
// | { device: 'HTC One', landscape?: boolean, width?: number, height?: number, zoom?: number }
// | { device: 'iPad Mini', color: 'black' | 'silver', landscape?: boolean, width?: number, height?: number, zoom?: number }
// | { device: 'MacBook Pro', width?: number, height?: number, zoom?: number }

interface Props {}

export default function SomeDevices(props: Props) {
  const { projects } = useDataContext();

  const imgs = projects
    .filter((p) => !!p.image_urls)
    .map((p) => p.image_urls)
    .flat()
    .map((img) => ({ url: img ?? "", mini_url: getMiniUrl(img ?? ""), width: 300, height: 200 })) as AppImage[];

  return (
    <div>
      <DeviceFrameset device="iPhone 8" color="silver">
        <div>Hello world</div>
        <div>Hello world</div>
        <div>Hello world</div>
      </DeviceFrameset>
      <DeviceFrameset device="iPhone 8" color="black">
        <div>Hello world</div>
        <iframe width={376} height={670} src="https://embed.lottiefiles.com/animation/95387"></iframe>
      </DeviceFrameset>
      <DeviceFrameset device="iPhone 8" color="gold">
        <h1 className="h1-text -my-2 text-center">Welcome!</h1>
        <div>Hello world</div>
        <ImageGrid
          className="bg-base-300"
          images={imgs?.slice(36, 38)}
          gridTemplatesObj={template03}
          imgHeight={50}
          imgWidth={90}
          gap={10}
        />
        <ImageGrid
          className="bg-base-300 my-4"
          images={imgs?.slice(46, 48)}
          gridTemplatesObj={template03}
          imgHeight={50}
          imgWidth={90}
          gap={10}
        />
        <ImageGrid
          className="bg-base-300"
          images={imgs?.slice(56, 58)}
          gridTemplatesObj={template03}
          imgHeight={50}
          imgWidth={90}
          gap={10}
        />
      </DeviceFrameset>
    </div>
  );
}
