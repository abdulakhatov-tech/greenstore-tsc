import { FC } from "react";
import { useTranslation } from "react-i18next";

import Typography from "@generic/typography";
import { OrderItem, OrderTotalSummary } from "./customs";
import useOrderDetailsModalFeatures from "../../features";

const OrderItemsList: FC = () => {
  const { t } = useTranslation();
  const { order } = useOrderDetailsModalFeatures();

  return (
    <div className='w-full py-[15px]'>
      <Typography size='h4' className='font-bold leading-4 text-black mb-[12px]'>
        {t("modal.track_order.order_details")}
      </Typography>

      <div className='flex flex-col gap-2'>
        {order?.shop_list?.map((value: any) => (
          <OrderItem key={value._id} {...value} />
        ))}
      </div>

      <OrderTotalSummary />
    </div>
  );
};

export default OrderItemsList;
