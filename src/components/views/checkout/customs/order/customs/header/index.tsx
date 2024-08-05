import { useTranslation } from "react-i18next";

const OrderSummaryHeader = () => {
  const { t } = useTranslation();
  return (
    <>
      <h2 className='text-[17px] font-bold leading-4 text-black mb-[20px]'>
        {t("checkout.your_order")}
      </h2>
      <div className='flex items-center justify-between pb-[10px] border-b border-[rgba(70,163,89,0.25)]'>
        <h4 className='text-[16px] font-semibold leading-4 text-black'>
          {t("checkout.products")}
        </h4>
        <h4 className='text-[16px] font-semibold leading-4 text-black'>
          {t("checkout.subtotal")}
        </h4>
      </div>
    </>
  );
};

export default OrderSummaryHeader;
