import { TailChase } from "ldrs/react";
import "ldrs/react/TailChase.css";

interface IProps {
  size?: string;
  color?: string;
  containerProps: React.HTMLAttributes<HTMLDivElement>;
}

export const LoaderTailChase = ({ size = "40", color = "black", containerProps: { className, ...props } }: IProps) => {
  return (
    <center className={`mt-3 ${className}`} {...props}>
      <TailChase size={size} speed="1.75" color={color} />
    </center>
  );
};
