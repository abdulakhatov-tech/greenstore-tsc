import { useAppDispatch, useAppSelector } from "@hooks/useRedux";
import { UseHeaderFeaturesT } from "./types";
import useSearchParamsHook from "@hooks/useSearchParams";
import { useNavigate } from "react-router-dom";
import { toggleSideMenuModalVisibility } from "@redux/slices/modal";
import { AuthQuery } from "@type/index";

const useHeaderFeatures = (): UseHeaderFeaturesT => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { setParam } = useSearchParamsHook();
  const { isAuthed } = useAppSelector(({ auth }) => auth);

  const handleAuth = () => {
    setParam("auth", AuthQuery.SignIn);
  };

  const handleUser = () => {
    navigate("/profile");
  };

  const handleSideMenu = () => {
    dispatch(toggleSideMenuModalVisibility({ open: true }));
  };

  const handleShoppingCart = () => {
    if (isAuthed) {
      navigate("/shopping-cart");
    } else {
      setParam("auth", AuthQuery.SignIn);
    }
  };

  const handleWishlist = () => {
    if(isAuthed) {
       navigate('/profile/wishlist')
    } else {
      setParam("auth", AuthQuery.SignIn);
    }
 }

  return {
    handleAuth,
    handleUser,
    handleSideMenu,
    handleShoppingCart,
    handleWishlist
  };
};

export default useHeaderFeatures;
