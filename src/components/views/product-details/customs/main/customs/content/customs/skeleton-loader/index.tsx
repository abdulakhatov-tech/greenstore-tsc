import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

import ActionButtons from "../action-buttons";
import CustomSkeleton from "@tools/skeleton";
import Button from "@generic/button";
import useProductFeatures from "../../../../../../features";
import { useTranslation } from "react-i18next";

const SkeletonLoader = () => {
   const { t } = useTranslation();
    const { product } = useProductFeatures()

   return (
      <div>
         <div className="flex items-center gap-3" id="product-user">
            <CustomSkeleton
               active
               type="input"
               style={{ width: "50px", height: "50px", borderRadius: "50%" }}
            />
            <CustomSkeleton active type="input" style={{ width: "280px" }} />
         </div>
         <div className='flex items-center justify-between mt-[15px]'>
            <CustomSkeleton active type="input" style={{ width: "80px" }} />
            <CustomSkeleton active type="input" style={{ width: "170px" }} />
         </div>
         <h5 className='mt-[15px] mb-[8px] font-medium'>{t('product_details_page.short_description')}:</h5>
         <div className="flex flex-col gap-3">
            <CustomSkeleton
               active
               type="input"
               style={{ width: "290px" }}
               className='text-gray text-[14px] font-normal'
            />
            <CustomSkeleton
               active
               type="input"
               style={{ width: "270px" }}
               className='text-gray text-[14px] font-normal'
            />
            <CustomSkeleton
               active
               type="input"
               style={{ width: "250px" }}
               className='text-gray text-[14px] font-normal'
            />
         </div>
         <div className='flex xl:items-center gap-3 flex-col xl:flex-row mt-[15px]'>
            <div className='flex items-center gap-4' id="product-price">
               <Button
                  type="button"
                  variant="primary"
                  className='rounded-[45%]'
               >
                  <MinusOutlined />
               </Button>
               <CustomSkeleton
                  active
                  type="input"
                  style={{ width: "10px", maxWidth: "10px !important" }}
                  className='text-gray text-[14px] font-normal'
               />
               <Button
                  type="button"
                  variant="primary"
                  className='rounded-[45%]'
               >
                  <PlusOutlined />
               </Button>
            </div>
            <ActionButtons product={product?.data} />
         </div>
         <div className='mt-[15px] text-gray flex items-center gap-3'>
            <span className='text-[#999]'>{t('product_details_page.category')}:</span>
            <CustomSkeleton
               active
               type="input"
               style={{ width: "200px" }}
               className='text-gray text-[14px] font-normal'
            />
         </div>
      </div>
   );
};

export default SkeletonLoader;
