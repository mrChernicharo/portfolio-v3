import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { AppTheme } from "../themes";

interface ThemeContextValues {
  theme: AppTheme;
  setTheme: React.Dispatch<React.SetStateAction<AppTheme>>;
}

const ThemeContext = createContext<ThemeContextValues>({
  theme: "dark",
  setTheme: () => {},
});

const useThemeContext = () => useContext(ThemeContext);

const ThemeContextProvider = (props: { children: ReactNode }) => {
  const [theme, setTheme] = useState<AppTheme>("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, useThemeContext, ThemeContextProvider };
