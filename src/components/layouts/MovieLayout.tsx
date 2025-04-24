import { Outlet } from "@core/imports";
import { Header } from "@components";
import { Main } from "@components/layouts/components";

export const MovieLayout = () => {
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
