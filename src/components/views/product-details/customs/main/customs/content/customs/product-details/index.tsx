import { Tag } from "antd";
import { useTranslation } from "react-i18next";

import useProductFeatures from "../../../../../../features";
import ActionButtons from "../action-buttons";
import { Image } from "@generic/index";
import Tooltip from "@tools/tooltip";
import Rating from "@generic/rating";
import Counter from "../counter";
import { formatPrice } from "@helpers/index";

const ProductDetails = () => {
  const { t } = useTranslation();
  const { product, user } = useProductFeatures();

  return (
    <div>
      <div className='flex items-center gap-3'>
        <Tooltip title={`${user?.data?.name} ${user?.data?.surname}`}>
          <Image
            src={user?.data?.profile_photo}
            alt={user?.data?.name}
            className='w-12 h-12 rounded-full cursor-pointer'
          />
        </Tooltip>
        <h2 className='text-[20px] md:text-[24px] lg:text-[28px] text-black font-bold leading-[26px]'>
          {product?.data?.title}
        </h2>
      </div>
      <div className='flex items-center justify-between mt-[15px]'>
        <strong className='text-green text-[22px] font-bold'>
          {formatPrice(product?.data?.price)}
        </strong>
        <div className='flex flex-col-reverse gap-1 sm:flex-row md:flex-col-reverse lg:flex-row lg:gap-2 items-center'>
          <Rating rating={product?.data?.rate} />
          <span className='text-[15px] font-normal'>
            {product?.data?.comments.length} {t('product_details_page.customer_review')}
          </span>
        </div>
      </div>
      <h5 className='mt-[15px] mb-[8px] font-medium'>{t('product_details_page.short_description')}:</h5>
      <p className='text-gray text-[14px] font-normal'>
        {product?.data?.short_description.slice(0, 250)}
      </p>
      <div className='flex xl:items-center gap-3 flex-col xl:flex-row mt-[15px]'>
        <Counter product={product?.data} />
        <ActionButtons product={product?.data} />
      </div>

      <div className='flex flex-col gap-1 mt-5'>
        <p className='text-gray flex items-center gap-3'>
          <span className='text-[#999]'>SKU:</span> {product?.data?._id}
        </p>
        <p className='text-gray flex items-center gap-3'>
          <span className='text-[#999]'>{t('product_details_page.category')}:</span>{" "}
          {product?.data?.category
            ?.split("-")
            ?.map(
              (item: string) =>
                item[0]?.toUpperCase() + item?.slice(1, item.length)
            )
            ?.join(" ")}
        </p>
        <p className='text-gray flex items-center gap-3'>
          <span className='text-[#999]'>Tags:</span>{" "}
          {product?.data?.tags?.map((tag: string) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
