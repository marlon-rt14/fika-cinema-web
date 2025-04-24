import { Title } from "@admin/components";

interface Props {
  children: React.ReactNode;
  title: string;
}

export const MainLayout = ({ children, title }: Props) => {
  return (
    <div className="w-full flex flex-col gap-5">
      <Title>{title}</Title>
      {children}
    </div>
  );
};
