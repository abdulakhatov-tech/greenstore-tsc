import { FC } from "react";
import { Outlet } from "react-router-dom";

import Header from "@components/header";
import Footer from "@components/footer";
import Notification from "@tools/notification";
import SearchBar from "@components/search-bar";
import ModalVisibility from "@components/common/modals-visibility";

const MainLayout: FC = () => {

  return (
    <>
      <Header />
      <main>
        <SearchBar />       
        <Outlet />
      </main>
      <Footer />

      <Notification />
      <ModalVisibility />
    </>
  );
};

export default MainLayout;
