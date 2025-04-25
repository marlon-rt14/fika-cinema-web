type Props = React.HtmlHTMLAttributes<HTMLDivElement>;

export const Aside = ({ children, className, ...props }: Props) => {
  return (
    <aside className={`bg-gray-200 max-w-72 min-w-52 flex-1 h-screen flex items-center ${className}`} {...props}>
      {children}
    </aside>
  );
};
