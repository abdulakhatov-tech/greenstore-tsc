import { FC } from "react";
import Header from "@components/header";
import { Outlet } from "react-router-dom";

const MainLayout: FC = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
