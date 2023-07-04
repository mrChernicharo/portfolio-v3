import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { EllipsisHorizontalIcon } from "@heroicons/react/20/solid";
import { APP_THEMES, AppTheme } from "../../themes";
import { useThemeContext } from "../../context/ThemeContext";
import AppSelect from "./AppSelect";
import { useScreenWidth } from "../../hooks/useScreenWidth";
import { Link } from "react-router-dom";
import { APP_LINKS } from "../../helpers/constants";

export default function NavMenu() {
  const { theme, setTheme } = useThemeContext();
  const { width: screenWidth } = useScreenWidth();

  return (
    <div className="w-56 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <>
          <div>
            <Menu.Button className="w-full justify-center rounded-md bg-black bg-opacity-40 px-4 py-2 text-sm font-medium hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible focus-visible:ring-opacity-75">
              <EllipsisHorizontalIcon
                className="h-5 w-5 scale-[2] text-secondary hover:text-secondary"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              as="div"
              className="absolute right-0 mt-2 w-56 origin-top-right bg-base-200 
                  divide-y divide-gray-100 shadow-lg ring-opacity-5 focus:outline-none"
            >
              <div className="px-1 py-1">
                {/* links */}
                {screenWidth <= 600 && null}

                {APP_LINKS.map(({ label, to }) => (
                  <Menu.Item key={label}>
                    {({ active }) => (
                      <Link to={to}>
                        <div
                          className={`group flex w-full items-center rounded-md px-2 py-2 text-sm text-base-content ${
                            active ? "bg-secondary text-secondary-content" : ""
                          }`}
                        >
                          <span className="mx-2">{label}</span>
                        </div>
                      </Link>
                    )}
                  </Menu.Item>
                ))}

                <Menu.Item>
                  {/* theme select */}
                  {({ active }) => (
                    <div
                      className={`group flex w-full items-center rounded-md px-2 py-2 text-sm ${
                        active ? "bg-secondary" : ""
                      }`}
                    >
                      <AppSelect
                        label="theme"
                        defaultValue={theme}
                        items={APP_THEMES}
                        onChange={(val) => setTheme(val as AppTheme)}
                      />
                    </div>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </>
      </Menu>
    </div>
  );
}
