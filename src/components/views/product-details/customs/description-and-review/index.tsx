import { useTranslation } from "react-i18next";
import { useState } from "react";

import useProductFeatures from "../../features";
import useOnlineStatus from "@hooks/useOnlineStatus";
import { LoadingSkeletons, TabOption } from "./customs";

const ProductDescriptionAndReviews = () => {
    const { t } = useTranslation();
   const [activeTab, setActiveTab] = useState("product-description");
   const isOnline = useOnlineStatus()
   const { product: {isLoading, data} } = useProductFeatures();

   const renderProductDescription = () => (
      <div className='mt-[20px] flex flex-col gap-[15px] sm:gap-[40px]'>
         {isOnline && !isLoading ? (
            <p
               className='text-[12px] sm:text-[14px] md:text-[16px] leading-[1.5] text-gray'
               dangerouslySetInnerHTML={{ __html: data?.description }}
            />
         ) : (
            <LoadingSkeletons />
         )}
      </div>
   );

   const renderReviews = () => (
      <div className='mt-[20px] flex flex-col gap-[20px]'>
         {isOnline && !isLoading ? (
            data?.comments?.length ? (
               <p
                  className='text-[12px] sm:text-[14px] md:text-[16px] leading-[1.5] text-gray'
                  dangerouslySetInnerHTML={{ __html: data?.comments }}
               />
            ) : (
               <p className='text-[12px] sm:text-[14px] md:text-[16px] leading-[1.5] text-gray'>
                  {t('product_details_page.no_reviews_yet')}
               </p>
            )
         ) : (
            <LoadingSkeletons />
         )}
      </div>
   );

   return (
      <div className='my-[30px] sm:my-[40px] md:my-[50px] lg:my-[60px] xl:my-[70px]'>
         <ul className='flex items-center gap-[24px]'>
            <TabOption
               isActive={activeTab === "product-description"}
               onClick={() => setActiveTab("product-description")}
            >
               {t('product_details_page.product_description')}
            </TabOption>
            <TabOption
               isActive={activeTab === "review"}
               onClick={() => setActiveTab("review")}
            >
               {t('product_details_page.reviews')} ({data?.comments?.length || 0})
            </TabOption>
         </ul>

         {activeTab === "product-description"
            ? renderProductDescription()
            : renderReviews()}
      </div>
   );
};

export default ProductDescriptionAndReviews;
