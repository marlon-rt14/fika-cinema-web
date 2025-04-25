type TButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
};

export const Button = ({ children, className, startIcon, endIcon, ...props }: TButtonProps) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg cursor-pointer bg-brand-primary-blue text-white  transition-all flex items-center gap-2 active:bg-brand-primary-violet ${className}`}
      {...props}
    >
      {startIcon && startIcon}
      {children}
      {endIcon && endIcon}
    </button>
  );
};
