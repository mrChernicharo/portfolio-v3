import { useThemeContext } from "../context/ThemeContext";
import { defaultTheme } from "../helpers/theme.helpers";
import { APP_THEMES, AppTheme } from "../themes";
import AppSelect from "./AppSelect";

export function NavBar() {
  const { setTheme } = useThemeContext();
  return (
    <div className="p-2 flex justify-between items-center bg-secondary">
      <div>Nav Bar</div>
      <AppSelect
        label="theme"
        defaultValue={defaultTheme}
        items={APP_THEMES}
        onChange={(val) => setTheme(val as AppTheme)}
      />
    </div>
  );
}
