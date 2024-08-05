import { useTranslation } from "react-i18next";
import { FC } from "react";

import { formatPrice } from "@helpers/index";
import useCartTotalFeatures from "../../features";

const Price: FC = () => {
  const { t } = useTranslation();
  const { cart, coupon, totalWithShipping, totalWithCoupon } =
    useCartTotalFeatures();

  return (
    <div className='flex justify-between items-center mt-[15px]'>
      <h2 className='text-[16px] font-bold leading-4 text-black'>
        {t("shopping_cart.total")}
      </h2>
      <div className='flex flex-col gap-2'>
        {cart?.length && coupon?.discount_for ? (
          <h2 className='text-[16px] font-bold leading-4 text-green line-through'>
            {formatPrice(totalWithShipping)}
          </h2>
        ) : null}
        <h2 className='text-[16px] font-bold leading-4 text-green'>
          {formatPrice(totalWithCoupon)}
        </h2>
      </div>
    </div>
  );
};

export default Price;
