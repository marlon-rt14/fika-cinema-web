import { Outlet } from "@/core/routing";
import { MainAdmin, NavbarAdmin, SidebarAdmin } from "@components";

export const AdminLayout = () => {
  return (
    <div className="flex flex-row relative overflow-hidden  bg-gray-100">
      <SidebarAdmin />
      {/* <SidebarAdminRes showSidebar={showSideBar} /> */}
      <MainAdmin>
        <NavbarAdmin />
        <Outlet />
      </MainAdmin>
    </div>
  );
};
