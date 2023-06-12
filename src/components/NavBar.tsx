import { useThemeContext } from "../context/ThemeContext";
import { defaultTheme } from "../helpers/theme.helpers";
import { APP_THEMES, AppTheme } from "../themes";
import AppMenu from "./AppMenu";
import AppSelect from "./AppSelect";

export function NavBar() {
  return (
    <div className="p-2 flex justify-between items-center bg-secondary">
      <div>Felipe Chernicharo</div>
      <AppMenu />

      {/* <AppSelect
        label="theme"
        defaultValue={defaultTheme}
        items={APP_THEMES}
        onChange={(val) => setTheme(val as AppTheme)}
      /> */}
    </div>
  );
}
