import { Modal } from "antd";
import { useTranslation } from "react-i18next";

import useProductFormModalFeatures from "./features";
import Typography from "@generic/typography";
import { PlantForm } from "./customs";
// import { PlantForm } from "./customs";

const EditProductModal: React.FC = () => {
  const { t } = useTranslation();
  const { onCancel, open } = useProductFormModalFeatures();

  return (
    <Modal open={open} footer={null} width={700} onCancel={onCancel}>
      <Typography size='h4' className='font-medium mt-2 mb-5'>
        {t('modal.plant_form_modal.edit_plant')}
      </Typography>

      <PlantForm />
    </Modal>
  );
};

export default EditProductModal;
