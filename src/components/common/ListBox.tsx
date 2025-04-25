import { Listbox, ListboxButton, ListboxOptions } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { memo } from "@core/base";
import { ListBoxItem } from "./components";

interface IItem {
  name: string;
  id: number;
}

interface Props {
  data: IItem[];
  selectedItem?: IItem;
  setSelectedItem: (item: IItem) => void;
  wrapperProps?: React.HTMLAttributes<HTMLDivElement>;
}

export const ListBox = memo(({ data, selectedItem, setSelectedItem, wrapperProps }: Props) => {
  const { className, ...rest } = wrapperProps || {};

  return (
    <div className={`max-w-52 z-50 select ${className}`} {...rest}>
      <Listbox value={selectedItem} onChange={setSelectedItem}>
        <ListboxButton
          className={clsx(
            "relative block w-full rounded-lg bg-white/5 py-1.5 pr-8 pl-3 text-left text-sm/6 text-white",
            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
          )}
        >
          {selectedItem?.name}
          <ChevronDownIcon className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60" aria-hidden="true" />
        </ListboxButton>
        <ListboxOptions
          anchor="bottom"
          transition
          className={clsx(
            "w-[var(--button-width)] rounded-xl border border-white/5 bg-white/5 p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none",
            "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0 backdrop-blur-2xl"
          )}
        >
          {data.map((item) => (
            <ListBoxItem key={item.id} value={item} />
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  );
});
