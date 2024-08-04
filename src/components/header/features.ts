import { useAppDispatch } from "@hooks/useRedux";
import { toggleSearchbar } from "@redux/slices/search";
import { UseHeaderFeaturesT } from "./types";
import useSearchParamsHook from "@hooks/useSearchParams";
import { useNavigate } from "react-router-dom";
import { toggleSideMenuModalVisibility } from "@redux/slices/modal";
import { AuthQuery } from "@components/common/modals/auth/types";
import { useAuth } from "@config/auth";

const useHeaderFeatures = (): UseHeaderFeaturesT => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { setParam } = useSearchParamsHook();
  const { isAuthed } = useAuth();

  const handleSearch = () => {
    dispatch(toggleSearchbar());
  };

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
    if (isAuthed()) {
      navigate("/shop/shopping-cart");
    } else {
      setParam("auth", AuthQuery.SignIn);
    }
  };

  const handleWishlist = () => {
    if(isAuthed()) {
       navigate('/profile/wishlist')
    } else {
      setParam("auth", AuthQuery.SignIn);
    }
 }

  return {
    handleSearch,
    handleAuth,
    handleUser,
    handleSideMenu,
    handleShoppingCart,
    handleWishlist
  };
};

export default useHeaderFeatures;
