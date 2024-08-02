import { useAppDispatch } from "@hooks/useRedux";
import { toggleSearchbar } from "@redux/slices/search";
import { UseHeaderFeaturesT } from "./types";
import useSearchParamsHook from "@hooks/useSearchParams";
import { useNavigate } from "react-router-dom";

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

  return {
    handleSearch,
    handleAuth,
    handleUser
  };
};

export default useHeaderFeatures;
