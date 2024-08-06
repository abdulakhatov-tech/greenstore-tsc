import { useTranslation } from "react-i18next";
import { FC } from "react";

import { formatPrice } from "@helpers/index";
import useShoppingCartService from "@services/shopping-cart";
import { OrderSummaryItem } from "./customs";
import Typography from "@generic/typography";

const OrderTotalSummary: FC = () => {
  const { t } = useTranslation();
  const { shipping, coupon, getTotalPrice } = useShoppingCartService();

  const { totalWithCoupon, totalWithShipping } = getTotalPrice();

  return (
    <div className='flex flex-col gap-[25px] mt-[20px] max-w-[350px] ml-auto md:pr-[10px] mb-3'>
      <OrderSummaryItem
        label={t("modal.track_order.shipping")}
        value={formatPrice(shipping)}
      />

      <OrderSummaryItem
        label={t("modal.track_order.coupon")}
        value={`(-) ${coupon?.discount_for ? coupon?.discount_for : 0}%`}
      />

      <div className='flex items-center justify-between'>
        <Typography size='h4' className='font-bold leading-4 text-black'>
          {t("modal.track_order.total")}
        </Typography>
        <span className='flex-grow mx-[20px] border-t-[0.5px] border-[rgba(128,128,128,0.21)]'></span>

        {!coupon.discount_for ? (
          <strong className='text-[18px] font-bold leading-4 text-green'>
            {formatPrice(totalWithShipping)}
          </strong>
        ) : (
          <div className='flex flex-col gap-2'>
            <strong className='text-[18px] font-semibold leading-4 text-green line-through'>
              {formatPrice(totalWithShipping)}
            </strong>

            <strong className='text-[18px] font-bold leading-4 text-green'>
              {formatPrice(totalWithCoupon)}
            </strong>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderTotalSummary;
