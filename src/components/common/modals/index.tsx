import { useAppDispatch, useAppSelector } from "@hooks/useRedux";
import { FC, useEffect } from "react";
import AuthModal from "./auth";
import useSearchParamsHook from "@hooks/useSearchParams";
import {
  toggleAuthModalVisibility,
  toggleTrackOrderModalVisibility,
} from "@redux/slices/modal";
import { AuthQuery } from "./auth/types";
import SideMenuModal from "./side-menu";
import CategoryMenu from "./category-menu";
import TrackOrderModal from "./track-order";

const ModalVisibility: FC = () => {
  const { getParam, setParam } = useSearchParamsHook();
  const { authModalVisibility, sideMenuModalVisibility, categoryModalVisibility, trackOrderModalVisibility } = useAppSelector(
    (state) => state.modal
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    const authParam = getParam("auth");
    const trackOrderParam = getParam('order')

    // Check if the authParam is a valid query type
    const isValidAuthParam =
      authParam === AuthQuery.SignIn || authParam === AuthQuery.SignUp;
    const isValidTrackOrderParam = trackOrderParam === 'track-order'

    if (authParam) {
      if (!isValidAuthParam) {
        setParam("auth", AuthQuery.SignIn);
        return;
      }
      dispatch(
        toggleAuthModalVisibility({
          open: true,
          authQuery: isValidAuthParam ? authParam : AuthQuery.SignIn,
        })
      );
    } else {
      dispatch(toggleAuthModalVisibility({ open: false, authQuery: null }));
    }

    if(trackOrderParam) {
      if(!isValidTrackOrderParam) {
        setParam('order', 'track-order');
        return
      }

      dispatch(toggleTrackOrderModalVisibility(true))

    } else {
      dispatch(toggleTrackOrderModalVisibility(false))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getParam("auth"), getParam('order')]);

  return (
    <>
      {authModalVisibility.open && <AuthModal />}
      {sideMenuModalVisibility.open && <SideMenuModal />}
      {categoryModalVisibility && <CategoryMenu />}
      {trackOrderModalVisibility && <TrackOrderModal />}
    </>
  );
};

export default ModalVisibility;
