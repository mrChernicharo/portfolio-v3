import { throttle } from "lodash-es";
import { RefObject, useEffect, useRef, useState } from "react";

export function useParentContainer(elementRef: RefObject<HTMLElement>) {
  const [rect, setRect] = useState<DOMRect | null>(null);
  const timeout = useRef<NodeJS.Timeout>();

  const updateRect = () => {
    if (!elementRef.current?.getBoundingClientRect) return;
    setRect(elementRef.current.getBoundingClientRect());
  };

  const handleResize = throttle(() => {
    updateRect();
    clearTimeout(timeout.current);

    let i = 0;
    while (i < 136) {
      const delay = i * 10;
      timeout.current = setTimeout(updateRect, delay);
      i++;
    }
  }, 200);

  // useEffect(() => {
  //   console.log(rect?.width);
  // }, [rect]);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { rect };
}
