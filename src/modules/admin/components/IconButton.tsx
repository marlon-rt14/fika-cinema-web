type TProps = React.HTMLAttributes<HTMLButtonElement>;

export const IconButton = ({ children, className, ...props }: TProps) => {
  return (
    <button className={`p-1 rounded-lg cursor-pointer  transition-all ${className}`} {...props}>
      {children}
    </button>
  );
};
