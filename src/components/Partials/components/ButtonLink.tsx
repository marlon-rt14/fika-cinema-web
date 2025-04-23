import React from "react";
import { Link } from "react-router";

export const ButtonLink = ({ children, to }: { children: React.ReactNode; to: string }) => {
  return (
    <Link
      to={to}
      className="flex items-center justify-center p-5 w-full
      bg-brand-primary-blue text-white
      rounded-2xl"
    >
      {children}
    </Link>
  );
};
