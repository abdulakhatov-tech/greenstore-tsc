import { Spin } from "antd";
import { useTranslation } from "react-i18next";
import { FC } from "react";

import { formatPrice } from "@helpers/index";
import useCartTotalFeatures from "../../features";

const Content: FC = () => {
  const { t } = useTranslation();
  const { loading, totalWithoutCoupon, shipping, formattedDiscount } =
    useCartTotalFeatures();

  return (
    <div className='flex flex-col gap-3'>
      <div className='flex items-center justify-between'>
        <h4 className='text-[16px] font-normal leading-4 text-black'>
          {t("shopping_cart.subtotal")}
        </h4>
        <span className='flex-grow mx-[20px] border-t-[0.5px] border-[rgba(128,128,128,0.21)]'></span>
        <strong className={`text-[18px] leading-4 font-semibold text-black`}>
          {formatPrice(totalWithoutCoupon)}
        </strong>
      </div>

      <div className='flex items-center justify-between'>
        <h4 className='text-[16px] font-normal leading-4 text-black'>
          {t("shopping_cart.coupon_discount")}
        </h4>
        <span className='flex-grow mx-[20px] border-t-[0.5px] border-[rgba(128,128,128,0.21)]'></span>
        <strong className={`text-[15px] leading-4 font-normal text-black`}>
          {loading ? <Spin /> : <span>{formattedDiscount}</span>}
        </strong>
      </div>

      <div className='flex items-center justify-between'>
        <h4 className='text-[16px] font-normal leading-4 text-black'>
          {t("shopping_cart.shipping_fee")}
        </h4>
        <span className='flex-grow mx-[20px] border-t-[0.5px] border-[rgba(128,128,128,0.21)]'></span>
        <strong className={`text-[18px] leading-4 font-semibold text-black`}>
          {formatPrice(shipping)}
        </strong>
      </div>
    </div>
  );
};

export default Content;
