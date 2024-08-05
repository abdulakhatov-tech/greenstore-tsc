import { Modal } from "antd";
import { useTranslation } from "react-i18next";
import { FC } from "react";

import Button from "@generic/button";
import useTrackOrderFeatures from "./features";
import { Header, OrderItemsList, OrderSummary } from "./customs";

const TrackOrderModal: FC = () => {
  const { t } = useTranslation();
  const { open, onCancel, onTrackOrder } = useTrackOrderFeatures();

  return (
    <Modal open={open} onCancel={onCancel} footer={null} width={600}>
      <Header />
      <OrderSummary />
      <OrderItemsList />
      <p className='p-[18px] text-center text-gray'>
        {t("modal.track_order.description")}
      </p>
      <Button onClick={onTrackOrder} variant='primary' className='mx-auto my-5'>
        {t('modal.track_order.track_your_order')}
      </Button>
    </Modal>
  );
};

export default TrackOrderModal;
