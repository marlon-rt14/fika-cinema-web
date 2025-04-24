interface Props {
  children: React.ReactNode;
}

export const MainAdmin = ({ children }: Props) => {
  return <main className="p-5  flex-1">{children}</main>;
};
