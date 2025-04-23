import { Outlet } from "react-router";
import { SidebarAdmin } from "../Partials";
import { MainAdmin } from "./components/MainAdmin";

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
