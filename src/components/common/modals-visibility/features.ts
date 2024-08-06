import { toggleAuthModalVisibility, toggleTrackOrderModalVisibility } from "@redux/slices/modal";
import useSearchParamsHook from "@hooks/useSearchParams";
import { ModalVisibilityFeaturesI } from "./types";
import { useAppDispatch } from "@hooks/useRedux";
import { AuthQuery } from "@type/index";

const AUTH_QUERY_DEFAULT = AuthQuery.SignIn;
const TRACK_ORDER_QUERY_DEFAULT = "track-order";

const useModalVisibilityFeatures = ():ModalVisibilityFeaturesI => {
  const { setParam } = useSearchParamsHook();
  const dispatch = useAppDispatch();

  const handleAuthParam = (authParam: string | null) => {
    const isValidAuthParam =
      authParam === AuthQuery.SignIn || authParam === AuthQuery.SignUp;

    if (authParam && !isValidAuthParam) {
      setParam("auth", AUTH_QUERY_DEFAULT);
    }

    dispatch(
      toggleAuthModalVisibility({
        open: Boolean(authParam),
        authQuery: isValidAuthParam ? authParam : null,
      })
    );
  };

  const handleTrackOrderParam = (trackOrderParam: string | null) => {
    const isValidTrackOrderParam =
      trackOrderParam === TRACK_ORDER_QUERY_DEFAULT;

    if (trackOrderParam && !isValidTrackOrderParam) {
      setParam("order", TRACK_ORDER_QUERY_DEFAULT);
    }

    dispatch(toggleTrackOrderModalVisibility(Boolean(trackOrderParam)));
  };

  return { handleAuthParam, handleTrackOrderParam };
};

export default useModalVisibilityFeatures;


