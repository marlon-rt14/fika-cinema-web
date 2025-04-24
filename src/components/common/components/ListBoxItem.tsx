import { ListboxOption } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { memo } from "react";

interface Props {
  value: { id: number; name: string };
}

export const ListBoxItem = memo(({ value }: Props) => {
  return (
    <ListboxOption value={value} className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10">
      <CheckIcon className="invisible size-4 fill-white group-data-[selected]:visible" />
      <div className="text-sm/6 text-white">{value.name}</div>
    </ListboxOption>
  );
});
