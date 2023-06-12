import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { AppTheme } from "../themes";
import { defaultTheme } from "../helpers/theme.helpers";



interface ThemeContextValues {
  theme: AppTheme;
  setTheme: React.Dispatch<React.SetStateAction<AppTheme>>;
}

const ThemeContext = createContext<ThemeContextValues>({
  theme: defaultTheme,
  setTheme: () => {},
});

const useThemeContext = () => useContext(ThemeContext);

const ThemeContextProvider = (props: { children: ReactNode }) => {
  const [theme, setTheme] = useState<AppTheme>(defaultTheme);

  // sync localStorage and <html>.data-theme
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{props.children}</ThemeContext.Provider>;
};

export { ThemeContext, useThemeContext, ThemeContextProvider };
