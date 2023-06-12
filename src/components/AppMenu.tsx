import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { EllipsisHorizontalIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import AppSelect from "./AppSelect";
import { defaultTheme } from "../helpers/theme.helpers";
import { APP_THEMES, AppTheme } from "../themes";
import { useThemeContext } from "../context/ThemeContext";

export default function AppMenu() {
  const { theme, setTheme } = useThemeContext();

  return (
    <div className="w-56 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="w-full justify-center rounded-md bg-black bg-opacity-40 px-4 py-2 text-sm font-medium hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible focus-visible:ring-opacity-75">
            <EllipsisHorizontalIcon className="h-5 w-5 scale-[2] text-secondary hover:text-secondary" aria-hidden="true" />
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
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 shadow-lg ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button className={`group flex w-full items-center rounded-md px-2 py-2 text-sm ${active ? "bg-secondary" : "bg-base-300"}`}>
                    <AppSelect
                      label="theme"
                      defaultValue={theme}
                      items={APP_THEMES}
                      onChange={(val) => setTheme(val as AppTheme)}
                    />
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

