import { Outlet } from "@/core/routing";
import { Header } from "@components";
import { Main } from "@components/layouts/components";

export const MovieLayout = () => {
  console.log("render MovieLayout");
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      {/* <Footer /> */}
    </>
  );
};
