import { Outlet } from "react-router";
import { Header } from "../Partials";
import { Main } from "./components";

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
