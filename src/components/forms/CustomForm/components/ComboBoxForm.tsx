import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { memo, useState } from "@core/base";

interface IComboboxFormProps {
  data: { id: number; name: string }[];
  selectedItems: { id: number; name: string }[];
  setSelectedItems: (items: { id: number; name: string }[]) => void;
}

export const ComboboxForm = memo(({ data, selectedItems, setSelectedItems }: IComboboxFormProps) => {
  const [query, setQuery] = useState("");

  const filteredData =
    query === ""
      ? data
      : data.filter((item) => {
          return item.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <div className="relative w-full border border-black/9 rounded-lg">
      <Combobox value={selectedItems} onChange={setSelectedItems} onClose={() => setQuery("")} multiple>
        <div className="relative">
          <ComboboxInput
            className={clsx(
              "w-full rounded-lg border-none bg-white/5 py-1.5 pr-8  pl-3 text-sm/6 text-white",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
            )}
            displayValue={() => selectedItems.map((item) => item.name).join(", ")}
            onChange={(event) => setQuery(event.target.value)}
          />
          <ComboboxButton className="group absolute inset-y-0  right-0 px-2.5">
            <ChevronDownIcon className="size-4 fill-white/60 group-data-[hover]:fill-white" />
          </ComboboxButton>
        </div>

        <ComboboxOptions
          anchor="top start"
          transition
          className={clsx(
            "w-[calc(28rem-3.25rem)] max-w-md rounded-xl max-h-52 border border-white/5 bg-brand-primary-violet/5 p-1 [--anchor-gap:var(--spacing-1)] empty:invisible",
            "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0 backdrop-blur-2xl z-50"
          )}
        >
          {filteredData.map((item) => (
            <ComboboxOption
              key={item.id}
              value={item}
              className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
            >
              <CheckIcon className="invisible size-4 fill-white group-data-[selected]:visible" />
              <div className="text-sm/6 text-white">{item.name}</div>
            </ComboboxOption>
          ))}
        </ComboboxOptions>
      </Combobox>
    </div>
  );
});
