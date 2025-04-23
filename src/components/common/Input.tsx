import React from "react";

type TInputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ type = "text", className = "", ...props }: TInputProps) => {
  return (
    <input type={type} className={`border border-black/9 rounded-md px-2 py-1 outline-none placeholder:text-gray-200 disabled:bg-black/9 ${className}`} {...props} />
  );
};
