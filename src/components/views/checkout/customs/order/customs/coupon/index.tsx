import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { FC } from "react";

const CouponSection:FC = () => {
   const { t } = useTranslation();
   const navigate = useNavigate();

   return (
      <p className="text-end text-[14px] leading-4 font-normal">
         {t("checkout.have_a_coupon_code")}{" "}
         <span onClick={() => navigate('/shop/shopping-cart')} className="font-medium text-green cursor-pointer active:text-[crimson]">
            {t("checkout.click_here")}
         </span>
      </p>
   );
};

export default CouponSection;
