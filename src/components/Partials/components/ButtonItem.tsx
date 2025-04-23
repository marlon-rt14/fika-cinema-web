import React from "react";

export const ButtonItem = ({ children }: { children: React.ReactNode }) => {
  return <li className="flex px-5">{children}</li>;
};
