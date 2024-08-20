import { useTranslation } from "react-i18next";
import CustomSkeleton from "@tools/skeleton";

const OrderSkeleton = () => {
  const { t } = useTranslation();

  return (
    <div className='bg-[#f1f0f0] w-full flex p-3' id='track-order'>
      <div className='grid grid-cols-2 md:grid-cols-4 w-full gap-2'>
        <div className='border-r p-2  border-[#46A35833]'>
          <h4 className='font-light mb-2'>
            {t("profile.track_order.order_number")}
          </h4>
          <CustomSkeleton type='input' active />
        </div>
        <div className='md:border-r p-2  md:border-[#46A35833]'>
          <h4 className='font-light mb-2'>{t("profile.track_order.date")}</h4>
          <CustomSkeleton type='input' active />
        </div>
        <div className='border-r p-2  border-[#46A35833]'>
          <h4 className='font-light mb-2'>{t("profile.track_order.total")}</h4>
          <CustomSkeleton type='input' active />
        </div>
        <div className='p-2 '>
          <h4 className='font-light mb-2'>{t("profile.track_order.more")}</h4>
          <CustomSkeleton type='input' active />
        </div>
      </div>
    </div>
  );
};

export default OrderSkeleton;
