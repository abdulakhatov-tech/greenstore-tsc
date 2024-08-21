import { useAppDispatch, useAppSelector } from "@hooks/useRedux";
import { toggleGetOrderDetailsModalVisibility } from "@redux/slices/modal";

const useOrderDetailsModalFeatures = () => {
    const dispatch = useAppDispatch();
    const { getOrderDetailsModalVisibility } = useAppSelector(state => state.modal);

    const onCancel = () => {
        dispatch(toggleGetOrderDetailsModalVisibility(false))
    }

  return { open: getOrderDetailsModalVisibility, onCancel }
};

export default useOrderDetailsModalFeatures;
