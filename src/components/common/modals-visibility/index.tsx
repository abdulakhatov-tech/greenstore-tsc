import { FC, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@hooks/useRedux";
import useSearchParamsHook from "@hooks/useSearchParams";

import {
  AuthModal,
  CategoryMenu,
  SideMenuModal,
  TrackOrderModal,
} from "./modals";
import useMediaQuery from "@hooks/useMediaQuery";
import useModalVisibilityFeatures from "./features";
import { toggleCategoryModalVisibility, toggleSideMenuModalVisibility } from "@redux/slices/modal";

const ModalVisibility: FC = () => {
  const { getParam } = useSearchParamsHook();
  const {
    authModalVisibility,
    sideMenuModalVisibility,
    categoryModalVisibility,
    trackOrderModalVisibility,
  } = useAppSelector((state) => state.modal);
  const { handleAuthParam, handleTrackOrderParam } =
    useModalVisibilityFeatures();
    const dispatch = useAppDispatch();
    
     // Media query to check if the screen width is less than 767px
  const isAbove767 = useMediaQuery("(min-width: 767px)");

  useEffect(() => {
    handleAuthParam(getParam("auth"));
    handleTrackOrderParam(getParam("order"));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getParam("auth"), getParam("order")]);

  useEffect(() => {
    if(isAbove767) {
      dispatch(toggleSideMenuModalVisibility(false));
      dispatch(toggleCategoryModalVisibility(false));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAbove767]);

  return (
    <>
      {authModalVisibility.open && <AuthModal />}
      {sideMenuModalVisibility && <SideMenuModal />}
      {categoryModalVisibility && <CategoryMenu />}
      {trackOrderModalVisibility && <TrackOrderModal />}
    </>
  );
};

export default ModalVisibility;
