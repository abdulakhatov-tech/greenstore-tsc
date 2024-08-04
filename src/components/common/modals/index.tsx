import { useAppDispatch, useAppSelector } from "@hooks/useRedux";
import { FC, useEffect } from "react";
import AuthModal from "./auth";
import useSearchParamsHook from "@hooks/useSearchParams";
import {
  toggleAuthModalVisibility,
} from "@redux/slices/modal";
import { AuthQuery } from "./auth/types";
import SideMenuModal from "./side-menu";
import CategoryMenu from "./category-menu";

const ModalVisibility: FC = () => {
  const { getParam, setParam } = useSearchParamsHook();
  const { authModalVisibility, sideMenuModalVisibility, categoryModalVisibility } = useAppSelector(
    (state) => state.modal
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    const authParam = getParam("auth");

    // Check if the authParam is a valid query type
    const isValidAuthQuery =
      authParam === AuthQuery.SignIn || authParam === AuthQuery.SignUp;

    if (authParam) {
      if (!isValidAuthQuery) {
        setParam("auth", AuthQuery.SignIn);
      }
      dispatch(
        toggleAuthModalVisibility({
          open: true,
          authQuery: isValidAuthQuery ? authParam : AuthQuery.SignIn,
        })
      );
    } else {
      dispatch(toggleAuthModalVisibility({ open: false, authQuery: null }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getParam("auth")]);

  return (
    <>
      {authModalVisibility.open && <AuthModal />}
      {sideMenuModalVisibility.open && <SideMenuModal />}
      {categoryModalVisibility && <CategoryMenu />}
    </>
  );
};

export default ModalVisibility;
