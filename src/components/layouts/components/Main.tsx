interface Props {
  children: React.ReactNode;
}

export const Main = ({ children }: Props) => {
  return <main className="bg-gradient-to-b from-brand-primary-violet to-brand-primary-blue p-10 pt-0 relative">{children}</main>;
};
