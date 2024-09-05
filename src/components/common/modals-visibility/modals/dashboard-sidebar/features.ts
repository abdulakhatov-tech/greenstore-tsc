import { useAppDispatch, useAppSelector } from "@hooks/useRedux";
import { toggleDashboardSidebarModalVisibility } from "@redux/slices/modal";

const useDashboardSidebarFeatures = () => {
  const dispatch = useAppDispatch();
  const { dashboardSidebarModalVisibility } = useAppSelector(
    (state) => state.modal
  );

  const onClose = () => {
    dispatch(toggleDashboardSidebarModalVisibility(false));
  };

  return { onClose, open: dashboardSidebarModalVisibility };
};

export default useDashboardSidebarFeatures;
