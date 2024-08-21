import { Modal } from "antd";
import useOrderDetailsModalFeatures from "./features";

const OrderDetailsModal = () => {
    const { open, onCancel } = useOrderDetailsModalFeatures()

  return <Modal open={open} onCancel={onCancel} maskClosable={false}>OrderDetailsModal</Modal>;
};

export default OrderDetailsModal;
