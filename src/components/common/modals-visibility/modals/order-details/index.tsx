import { Modal } from "antd";
import { useTranslation } from "react-i18next";

import useOrderDetailsModalFeatures from "./features";
import { OrderItemsList, OrderSummary } from "./customs";

const OrderDetailsModal = () => {
  const { t } = useTranslation();
  const { open, onCancel, onDelete } = useOrderDetailsModalFeatures();

  return (
    <Modal
      title={t("modal.track_order.order_details")}
      open={open}
      onCancel={onCancel}
      onOk={onDelete}
      maskClosable={false}
      width={600}
      okText={t("modal.order_details.delete")}
      okButtonProps={{ className: "bg-[crimson]" }}
      cancelText={t("modal.order_details.cancel")}
    >
      <OrderSummary />
      <OrderItemsList />
    </Modal>
  );
};

export default OrderDetailsModal;
