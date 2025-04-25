import { Aside, SidebarButtons } from "@components";

interface Props {
  showSidebar: boolean;
}

export const SidebarAdminRes = ({ showSidebar }: Props) => {
  return (
    <Aside className={`transition-all z-10 max-lg:absolute max-lg:top-0 max-lg:visible lg:hidden ${showSidebar ? "max-lg:left-0 " : "max-lg:-left-60 "}`}>
      <SidebarButtons />
    </Aside>
  );
};
