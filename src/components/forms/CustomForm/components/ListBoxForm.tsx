import { memo } from "@/core/base";
import { Control, Controller, FieldError, Merge } from "react-hook-form";
import { ComboboxForm } from "@components/forms/CustomForm/components/";
import { TFormValues } from "@movies/schemas";
import "./InputForm.css";

interface Props {
  name: keyof TFormValues;
  control: Control<TFormValues>;
  label: string;
  error?: Merge<FieldError, (FieldError | undefined)[]> | undefined;
  data: { id: number; name: string }[];
  selectedItems: { id: number; name: string }[];
  onChange: (items: { id: number; name: string }[]) => void;
  // setValue: UseFormSetValue<TFormValues>;
}

export const ListBoxForm = memo(({ name, control, label, error, data, selectedItems, onChange }: Props) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <Controller
        //
        name={name}
        control={control}
        render={({ field }) => <ComboboxForm data={data} selectedItems={selectedItems} setSelectedItems={onChange} {...field} />}
      />
      {error && <small className="error">{error.message}</small>}
    </div>
  );
});
