import { memo } from "@/core/base";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
}

export const Pill = memo(({ text, className, children, ...props }: Props) => {
  return (
    <small className={`bg-gray-100 px-2 py-1 rounded-full text-xs ${className}`} {...props}>
      {text ?? children}
    </small>
  );
});
