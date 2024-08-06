import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Card, Coupon, Header, OrderSummaryItem, OrderSummaryTotal, ShippingNote } from "./customs";
import useShoppingCartService from "@services/shopping-cart";
import { formatPrice } from "@helpers/index";

const Order: FC = () => {
  const { t } = useTranslation();
  const { cart, shipping, formattedDiscount, getTotalPrice } = useShoppingCartService();

  const { totalWithoutCoupon } = getTotalPrice();

  return (
    <div className='w-full row-start-1 md:row-start-2 pb-14 md:pb-0'>
      <Header />
      <div className='flex flex-col gap-[10px] py-[10px] max-h-[470px] overflow-y-auto'>
        {cart?.map((value) => (
          <Card key={value._id} {...value} />
        ))}
      </div>
      <Coupon />
      <div className='flex flex-col gap-[15px] mt-5 md:max-w-[345px] md:ml-auto'>
        <OrderSummaryItem
          label={t("checkout.subtotal")}
          value={formatPrice(totalWithoutCoupon)}
        />
        <OrderSummaryItem
          label={t("checkout.coupon_discount")}
          value={formattedDiscount}
          isDiscount={true}
        />
        <OrderSummaryItem
          label={t("checkout.shipping_fee")}
          value={formatPrice(shipping)}
        />
        
        <ShippingNote />
        <OrderSummaryTotal />
      </div>
    </div>
  );
};

export default Order;
