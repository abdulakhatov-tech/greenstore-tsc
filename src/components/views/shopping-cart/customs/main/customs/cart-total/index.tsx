import { useTranslation } from "react-i18next";

import { Actions, ApplyCouponForm, Content, Price } from "./customs";

const CartTotal = () => {
  // hooks
  const { t } = useTranslation();

  return (
    <div className='w-full'>
      <h3 className='font-bold pb-[11px] border-b border-[#46A35880]'>
        {t("shopping_cart.cart_total")}
      </h3>

      <ApplyCouponForm />
      <Content />
      <Price />
      <Actions />
    </div>
  );
};

export default CartTotal;
