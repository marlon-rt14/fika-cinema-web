import React from "react";

type TProps = React.HTMLAttributes<HTMLDivElement>;
export const TableRowCell = ({ className, children }: TProps) => {
  return <div className={`flex-1  border-r  border-gray-400  text-sm  ${className}`}>{children}</div>;
};
