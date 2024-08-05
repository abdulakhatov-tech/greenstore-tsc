import { FC } from "react";
import { useTranslation } from "react-i18next";

const ShippingNote:FC = () => {
   const { t } = useTranslation();

   return (
      <div className="flex items-center justify-end mb-2">
         <span className="text-[14px] leading-4 font-normal text-green active:text-[crimson]">
            {t("checkout.view_shipping_change")}
         </span>
      </div>
   );
};

export default ShippingNote;
