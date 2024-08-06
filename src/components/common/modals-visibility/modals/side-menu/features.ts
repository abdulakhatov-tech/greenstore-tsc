import { useAppDispatch, useAppSelector } from "@hooks/useRedux";
import useSearchParamsHook from "@hooks/useSearchParams";
import { toggleSideMenuModalVisibility } from "@redux/slices/modal";
import { useAuth } from "@config/auth";
import { AuthQuery } from "@type/index";

const useSideMenuModalFeatures = () => {
  const { signOut } = useAuth();
  const dispatch = useAppDispatch();
  const { setParam } = useSearchParamsHook();
  const { sideMenuModalVisibility } = useAppSelector((state) => state.modal);

  const onClose = () => {
    dispatch(toggleSideMenuModalVisibility(false))
  };

  const onAuthModal = () => {
    setParam('auth', AuthQuery.SignIn)
  }

  const handleSignOut = () => {
    signOut();
    onClose();
  }

  return { sideMenuModalVisibility, onClose, onAuthModal, handleSignOut };
};

export default useSideMenuModalFeatures;
