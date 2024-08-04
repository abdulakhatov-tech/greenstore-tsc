import MemoizedProductCard from "@generic/product-card";
import { FC } from "react";
import ProductSkeleton from "@tools/product-skeleton";
import { ProductPropsI } from "@type/index";
import useRelatedProductsFeatures from "./features";

const RelatedProducts: FC<{ title?: string }> = ({
  title = "Releted Products",
}) => {
  const { isLoading, data } = useRelatedProductsFeatures();

  return (
    <section className='py-20'>
      <div className='container'>
        <h2 className='text-[17px] leading-4 font-bold text-green mb-[50px]'>
          {title}
        </h2>
        <div className='overflow-x-auto'>
          <div className='grid grid-cols-4 gap-4 w-[1150px]'>
            {!isLoading
              ? data
                  ?.slice(0, 4)
                  .map((product: ProductPropsI, index: number) => (
                    <MemoizedProductCard
                      key={product?._id || index}
                      product={product}
                    />
                  ))
              : Array.from({ length: 4 }).map((_, index) => (
                  <ProductSkeleton key={index} />
                ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
