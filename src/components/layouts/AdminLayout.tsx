import { Outlet } from "@/core/routing";
import { SidebarAdmin, MainAdmin } from "@components";

export const AdminLayout = () => {
  return (
    <div className="flex flex-row h-screen w-screen bg-gray-100">
      <SidebarAdmin />
      <MainAdmin>
        <Outlet />
      </MainAdmin>
    </div>
  );
};
