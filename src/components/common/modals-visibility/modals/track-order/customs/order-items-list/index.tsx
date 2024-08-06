import { useTranslation } from "react-i18next";
import { FC } from "react";

import { OrderItem, OrderTotalSummary } from "./customs";
import useShoppingCartService from "@services/shopping-cart";
import Typography from "@generic/typography";

const OrderItemsList: FC = () => {
  const { t } = useTranslation();
  const { cart } = useShoppingCartService();

  return (
    <div className='w-full py-[15px] border-t border-b border-[rgba(70,163,89,0.25)]'>
      <Typography size='h4' className='font-bold leading-4 text-black mb-[12px]'>
        {t("modal.track_order.order_details")}
      </Typography>

      <div className='flex flex-col gap-3'>
        {cart?.map((value) => (
          <OrderItem key={value._id} {...value} />
        ))}
      </div>

      <OrderTotalSummary />
    </div>
  );
};

export default OrderItemsList;
