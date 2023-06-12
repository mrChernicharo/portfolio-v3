import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { capitalize } from "../helpers/shared.helpers";

export default function AppSelect(props: {
  label: string;
  defaultValue: string;
  items: string[];
  onChange: (val: string) => void;
}) {
  const { items, onChange } = props;
  const [value, setValue] = useState(props.defaultValue);

  return (
    <div className="relative min-w-[200px]">
      <label className="absolute z-10 text-[10px] top-[5px] left-[12px] opacity-80">{props.label}</label>
      <Listbox
        value={value}
        onChange={(val) => {
          setValue(val);
          onChange(val);
        }}
      >
        <div className="relative mt-1">
          <Listbox.Button
            tabIndex={0}
            className="relative w-full cursor-default rounded-lg bg-base-100 py-2 pl-3 pr-10 text-left shadow-md 
            focus:outline-none focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-base-100 
            focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-accent sm:text-sm"
          >
            <span className="block truncate mt-[0.5rem]">{capitalize(value)}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            enter="transition ease-in duration-100"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 min-w-[200px] overflow-auto rounded-md bg-base-200 py-1 text-base shadow-lg ring-1 ring-accent ring-opacity-5 focus:outline-none sm:text-sm">
              {items.map((item, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 ${active ? "bg-accent" : "bg-base-100"}`
                  }
                  value={item}
                >
                  {({ selected }) => (
                    <>
                      <span className={`block truncate text-left ml-10 ${selected ? "font-medium" : "font-normal"}`}>{capitalize(item)}</span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-accent">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
