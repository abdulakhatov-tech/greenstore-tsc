import { useTranslation } from "react-i18next";
import { FC } from "react";

import { formatPrice } from "@helpers/index";
import useShoppingCartService from "@services/shopping-cart";

const OrderSummaryTotal: FC = () => {
  const { t } = useTranslation();
  const { getTotalPrice, coupon } = useShoppingCartService();

  const { totalWithShipping, totalWithCoupon } = getTotalPrice();

  return (
    <div className='flex items-center justify-between border-t border-[rgba(70,163,89,0.25)] pt-6'>
      <h4 className='text-[16px] font-bold leading-4 text-black'>
        {t("checkout.total")}
      </h4>
      <span className='flex-grow mx-[20px] border-t-[0.5px] border-[rgba(128,128,128,0.21)]'></span>
      {coupon.code ? (
        <div className='flex flex-col gap-2'>
          <strong className='text-[17px] leading-4 font-bold text-green line-through'>
            {formatPrice(totalWithShipping)}
          </strong>
          <strong className='text-[18px] leading-4 font-bold text-green'>
            {formatPrice(totalWithCoupon)}
          </strong>
        </div>
      ) : (
        <strong className='text-[18px] leading-4 font-bold text-green'>
          {formatPrice(totalWithShipping)}
        </strong>
      )}
    </div>
  );
};

export default OrderSummaryTotal;
