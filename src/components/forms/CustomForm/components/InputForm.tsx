import { Control, Controller, FieldError } from "react-hook-form";
import { TFormValues } from "@movies/schemas";
import { Input } from "@components";
import "./InputForm.css";

interface Props {
  name: keyof TFormValues;
  control: Control<TFormValues>;
  label: string;
  type?: string;
  error?: FieldError;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

export const InputForm = ({ name, control, label, type, error, inputProps }: Props) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Input
            id={name}
            type={type}
            {...field}
            value={Array.isArray(field.value) ? field.value.join(", ") : field.value}
            className={`form-control ${error ? "is-invalid" : ""}`}
            {...inputProps} // Spread the inputProps to allow additional attributes like placeholder, etc.
          />
        )}
      />
      {error && <small className="error">{error.message}</small>}
    </div>
  );
};
