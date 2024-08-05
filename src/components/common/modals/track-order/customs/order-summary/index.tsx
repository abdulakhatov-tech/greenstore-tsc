import { FC } from "react";

import { formatPrice } from "@helpers/index";
import useShoppingCartService from "@services/shopping-cart";
import { useTranslation } from "react-i18next";

const OrderSummary:FC = () => {
  const { t } = useTranslation();
  const { getTotalPrice, payment_method } = useShoppingCartService();
  const { totalWithCoupon } = getTotalPrice();

  return (
    <div className='w-full py-[15px] border-t border-[rgba(70,163,89,0.25)]'>
      <ul className='grid grid-cols-[1fr_1fr] gap-4 md:gap-0 md:grid-cols-[1fr_1fr_80px_1.3fr]'>
        <li className='flex flex-col border-r border-[rgba(70,163,89,0.25)]'>
          <div>
            <h4 className='text-gray text-[14px] font-normal leading-4 mb-[3px]'>
              {t("modal.track_order.order_number")}
            </h4>
            <strong className='text-[14px] lg:text-[15px] font-semibold leading-4 text-[#727272]'>
              {new Date().getTime()}
            </strong>
          </div>
        </li>
        <li className='flex flex-col md:items-center md:border-r border-[rgba(70,163,89,0.25)]'>
          <div>
            <h4 className='text-gray text-[14px] font-normal leading-4 mb-[3px]'>
              {t("modal.track_order.order_date")}
            </h4>
            <strong className='text-[14px] lg:text-[15px] font-semibold leading-4 text-[#727272]'>
              {new Date().toDateString()}
            </strong>
          </div>
        </li>
        <li className='flex flex-col md:items-center border-r border-[rgba(70,163,89,0.25)]'>
          <div>
            <h4 className='text-gray text-[14px] font-normal leading-4 mb-[3px]'>
              {t("modal.track_order.total")}
            </h4>
            <strong className='text-[14px] lg:text-[15px] font-semibold leading-4 text-[#727272]'>
              {formatPrice(totalWithCoupon)}
            </strong>
          </div>
        </li>
        <li className='flex flex-col md:items-center'>
          <div>
            <h4 className='text-gray text-[14px] font-normal leading-4 mb-[3px]'>
              {t("modal.track_order.payment_method")}
            </h4>
            <strong className='text-[14px] lg:text-[15px] font-semibold leading-4 text-[#727272]'>
              {payment_method
                ?.split("-")
                ?.map((item) => item[0]?.toUpperCase() + item?.slice(1))
                ?.join(" ")}
            </strong>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default OrderSummary;
