import { LoginOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { Drawer } from "antd";
import { FC } from "react";

import { Header, ProfileMenu } from "./customs";
import useSideMenuModalFeatures from "./features";
import { NavList } from "@components/header/custom";
import { useAuth } from "@config/auth";
import Button from "@generic/button";

const SideMenuModal: FC = () => {
  const { t } = useTranslation();
  const { isAuthed } = useAuth();
  const { sideMenuModalVisibility, onClose, onAuthModal, handleSignOut } =
    useSideMenuModalFeatures();

  return (
    <Drawer
      title={<Header />}
      open={sideMenuModalVisibility}
      placement='left'
      key='left'
      onClose={onClose}
      closable={false}
      closeIcon={false}
      width={300}
    >
      <div className='flex flex-col justify-between h-full'>
        <div>
          {isAuthed() && <ProfileMenu />}
          <NavList isMobile={true} />

          {!isAuthed() && (
            <Button
              variant='primary'
              type='button'
              className='animate-bounce mt-7'
              aria-label='Login Button'
              onClick={onAuthModal}
            >
              <LoginOutlined /> {t("header.login")}
            </Button>
          )}
        </div>

        <div>
          {isAuthed() && (
            <Button
                onClick={handleSignOut}
              variant='secondary'
              className='font-semibold border-[crimson] text-[crimson] active:bg-[crimson] active:text-[white] mx-auto'
            >
              {t("routes.logout")}
            </Button>
          )}
        </div>
      </div>
    </Drawer>
  );
};

export default SideMenuModal;
