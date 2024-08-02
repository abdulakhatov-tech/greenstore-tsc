import { useAppDispatch } from "@hooks/useRedux";
import { toggleSearchbar } from "@redux/slices/search";
import { UseHeaderFeaturesT } from "./types";
import useSearchParamsHook from "@hooks/useSearchParams";
import { useNavigate } from "react-router-dom";
import { toggleSideMenuModalVisibility } from "@redux/slices/modal";

const useHeaderFeatures = (): UseHeaderFeaturesT => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { setParam } = useSearchParamsHook();

  const handleSearch = () => {
    dispatch(toggleSearchbar());
  };

  const handleAuth = () => {
    setParam('auth', 'sign-in')
  }

  const handleUser = () => {
    navigate('/profile')
 }

 const handleSideMenu = () => {
   dispatch(toggleSideMenuModalVisibility({ open: true }))
 }

  return {
    handleSearch,
    handleAuth,
    handleUser,
    handleSideMenu
  };
};

export default useHeaderFeatures;
