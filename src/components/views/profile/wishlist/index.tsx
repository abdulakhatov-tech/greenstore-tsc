import MemoizedProductCard from "@generic/product-card";
import ProductSkeleton from "@tools/product-skeleton";
import { ProductPropsI } from "@type/index";
import React from "react";
import useWishlistFeatures from "./features";
import { Empty } from "antd";
import Typography from "@generic/typography";

const WishlistComponent: React.FC = () => {
  const { isLoading, isError, data } = useWishlistFeatures();


  if (isLoading || isError) {
    return (
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-7'>
        {Array.from({ length: 5 }).map((_, index) => (
          <ProductSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (!data.length) {
    return (
      <Empty
        className='mt-[10px]'
        description={
          <div>
            <Typography size='h4' className='font-semibold'>
              No wishlist yet...
            </Typography>
          </div>
        }
      />
    );
  }

  return (
    <div>
      <Typography size='h4' className='font-semibold'>
        Wishlist
      </Typography>
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-7'>
        {data.map((product: ProductPropsI) => (
          <MemoizedProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default WishlistComponent;
