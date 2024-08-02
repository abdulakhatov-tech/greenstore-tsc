import { FC } from "react";
import Header from "@components/header";
import { Outlet } from "react-router-dom";
import Notification from "@tools/notification";
import SearchBar from "@components/search-bar";
import ModalVisibility from "@components/common/modals";

const MainLayout: FC = () => {

  return (
    <>
      <Header />
      <main>
        <SearchBar />       
        <Outlet />
      </main>

      <Notification />
      <ModalVisibility />
    </>
  );
};

export default MainLayout;
