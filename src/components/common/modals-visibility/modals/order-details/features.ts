import useAxios from "@hooks/useAxios";
import { useAppDispatch, useAppSelector } from "@hooks/useRedux";
import { toggleOrderDetailsModalVisibility } from "@redux/slices/modal";
import { useQueryClient } from "@tanstack/react-query";
import { shipping } from "@utils/index";
import { notification } from "antd";

const useOrderDetailsModalFeatures = () => {
  const axios = useAxios();
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();
  const { orderDetailsModalVisibility } = useAppSelector(
    (state) => state.modal
  );

  const { order, open } = orderDetailsModalVisibility;

  const payment_method = order?.billing_address?.method
    ? order?.billing_address?.method
    : order?.billing_address?.payment_method ?? "";
  const coupon = order?.extra_shop_info?.coupon;
  const couponPercentage = order?.extra_shop_info?.coupon?.discount_for;
  const totalWithoutCoupon = order?.shop_list?.reduce(
    (total: any, item: any) => total + item.price * item.count,
    0
  );
  const totalWithShipping =
    totalWithoutCoupon + (order?.shop_list?.length ? shipping : 0);
  const totalWithCoupon =
    totalWithoutCoupon * ((100 - couponPercentage) / 100) +
    (order?.shop_list?.length ? shipping : 0);

  const onCancel = () => {
    dispatch(toggleOrderDetailsModalVisibility({ open: false, order: null }));
  };

  const onDelete = async () => {
    try {
      queryClient.setQueryData(["orders"], (prev: any) => {
        return prev.filter((item: any) => item?._id !== order?._id);
      });

      notification.success({
        message: "Order deleted successfully",
        description: "Order has been deleted successfully",
      });

      onCancel();

      await axios({
        url: "/order/delete-order",
        method: "DELETE",
        data: { _id: order?._id },
      });
    } catch (error: any) {
      notification.error({
        message: "Error deleting order",
        description: error?.message ?? "Error deleting order",
      });
    }
  };

  return {
    open,
    onCancel,
    onDelete,
    shipping,
    order,
    payment_method,
    totalWithCoupon,
    totalWithShipping,
    coupon,
    totalWithoutCoupon,
  };
};

export default useOrderDetailsModalFeatures;
