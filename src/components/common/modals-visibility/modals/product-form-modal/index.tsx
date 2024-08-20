import { Modal } from "antd";
import useProductFormModalFeatures from "./features";
import Typography from "@generic/typography";
import { PlantForm } from "./customs";

const ProductFormModal: React.FC = () => {
  const { actionType, onCancel, open } = useProductFormModalFeatures();

  return (
    <Modal open={open} footer={null} width={700} onCancel={onCancel}>
      <Typography size='h4' className='font-medium mt-2 mb-5'>
        {actionType === "edit" ? "Edit Plant" : "Add New Plant"}
      </Typography>

      <PlantForm />
    </Modal>
  );
};

export default ProductFormModal;
