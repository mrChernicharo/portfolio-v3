import { useEffect, useState } from "react";
import { throttle } from "lodash-es";

const screenSizes = {
  xs: 420,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1440,
  "3xl": 1600,
};

const getBreakpoint = (width: number) => {
  if (width <= screenSizes.xs) return "xs";
  else if (width > screenSizes.xs && width <= screenSizes.sm) return "sm";
  else if (width > screenSizes.sm && width <= screenSizes.md) return "md";
  else if (width > screenSizes.md && width <= screenSizes.lg) return "lg";
  else if (width > screenSizes.lg && width <= screenSizes.xl) return "xl";
  else if (width > screenSizes.xl && width <= screenSizes["2xl"]) return "2xl";
  else return "3xl";
};

export function useScreenWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  const [breakpoint, setBreakpoint] = useState(getBreakpoint(window.innerWidth));

  const handleResize = throttle(() => {
    setWidth(window.innerWidth);
    setBreakpoint(getBreakpoint(window.innerWidth));
  }, 500);

  useEffect(() => {
    console.log({ width });
  }, [width]);
  useEffect(() => {
    console.log({ breakpoint });
  }, [breakpoint]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { width, breakpoint };
}
