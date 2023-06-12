import { AppTheme } from "../themes";

const getDefaultTheme = (): AppTheme => {
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme) {
    return storedTheme as AppTheme;
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

export const defaultTheme = getDefaultTheme();