import { useThemeContext } from "../context/ThemeContext";
import { APP_THEMES, AppTheme } from "../themes";
import AppSelect from "./AppSelect";

export function NavBar() {
  const { setTheme } = useThemeContext()
  return (
    <div className="p-2 flex justify-between items-center bg-primary">
      <div>Nav Bar</div>
      <AppSelect items={APP_THEMES} onChange={(val) => setTheme(val as AppTheme)} />
    </div>
  );
}
