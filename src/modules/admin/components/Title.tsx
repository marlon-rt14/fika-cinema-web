import React from "react";

interface IProps {
  children?: React.ReactNode;
}

export const Title = ({ children }: IProps) => {
  return <h1 className="text-3xl font-bold">{children}</h1>;
};
