import { FC, useState } from "react";
import { BigImage, SmallImages } from "./customs";
import useProductFeatures from '../../../../features.ts'

const ProductImageGallery:FC  = () => {
  const { product } = useProductFeatures();
  const [activeImage, setActiveImage] = useState(0) 

  return <div className="flex flex-col-reverse gap-[12px] sm:gap-[16px] md:gap-[20px] lg:gap-[24] xl:gap-[28px] lg:flex-row">
    <SmallImages loading={product?.isLoading} {...product?.data} setActiveImage={setActiveImage} activeImage={activeImage} />
    <BigImage loading={product?.isLoading} activeImage={product?.data?.detailed_images?.[activeImage] ?? product?.data?.main_image} title={product?.data?.title} />
  </div>;
};

export default ProductImageGallery ;
