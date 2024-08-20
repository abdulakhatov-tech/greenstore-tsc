import { toggleAuthModalVisibility, toggleProductFormModalVisibility, toggleTrackOrderModalVisibility } from "@redux/slices/modal";
import useSearchParamsHook from "@hooks/useSearchParams";
import { ModalVisibilityFeaturesI } from "./types";
import { useAppDispatch } from "@hooks/useRedux";
import { AuthQuery } from "@type/index";

const AUTH_QUERY_DEFAULT = AuthQuery.SignIn;
const TRACK_ORDER_QUERY_DEFAULT = "track-order";
const PRODUCT_ACTION_TYPE = 'edit'

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

  const handleProductFormParam = (actionType: string | null) => {
    const isValidActionType = (actionType === 'edit' || actionType === 'add')

    if(actionType && !isValidActionType) {
      setParam('action-type',  PRODUCT_ACTION_TYPE)
    }

    dispatch(toggleProductFormModalVisibility(Boolean(actionType)))
  } 

  return { handleAuthParam, handleTrackOrderParam, handleProductFormParam };
};

export default useModalVisibilityFeatures;


