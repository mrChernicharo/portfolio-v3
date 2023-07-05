import { throttle } from "lodash-es";
import { RefObject, useEffect, useState } from "react";

export function useParentContainer(elementRef: RefObject<HTMLElement>) {
  const [rect, setRect] = useState<DOMRect | null>(null);
  const [element, setElement] = useState<HTMLElement | null>(null);

  const handleResize = throttle(() => {
    if (!elementRef.current?.getBoundingClientRect) return;

    if (!element) {
      setElement(elementRef.current);
    }

    setRect(elementRef.current.getBoundingClientRect());
  }, 500);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { element, rect };
}
