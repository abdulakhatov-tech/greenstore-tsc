import MemoizedProductCard from "@generic/product-card";
import ProductSkeleton from "@tools/product-skeleton";
import { ProductPropsI } from "@type/index";
import React from "react";
import useWishlistFeatures from "./features";
import { Empty, Pagination } from "antd";
import Typography from "@generic/typography";
import usePaginationFeatures from "./pagination";

const WishlistComponent: React.FC = () => {
  const { isLoading, isError, data: products } = useWishlistFeatures();
  const { currentProducts, handlePageChange, currentPage, itemsPerPage } =
    usePaginationFeatures();


  if (isLoading || isError) {
    return (
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-7'>
        {Array.from({ length: 5 }).map((_, index) => (
          <ProductSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (!products.length) {
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
        {currentProducts?.map((product: ProductPropsI) => (
          <MemoizedProductCard key={product._id} product={product} />
        ))}
      </div>
      <div className='flex justify-end mt-[90px]'>
        <Pagination
          current={currentPage}
          defaultCurrent={1}
          total={products?.length ?? 0}
          pageSize={itemsPerPage}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default WishlistComponent;
