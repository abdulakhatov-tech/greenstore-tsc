import { Pagination } from "antd";
import classNames from "classnames";
import React, { memo } from "react";

import { ProductPropsI } from "@type/index";
import usePaginationFeatures from "./paginatin";
import { useAppSelector } from "@hooks/useRedux";
import ProductSkeleton from "@tools/product-skeleton";
import MemoizedProductCard from "@generic/product-card";
import usePlantGallerProductsFeatures from "./features";

const Products: React.FC = memo(() => {
  const {
    isLoading,
    data: products,
    isError,
  } = usePlantGallerProductsFeatures();
  const { currentProducts, handlePageChange, currentPage, itemsPerPage } =
    usePaginationFeatures();
  const { plant_gallery_layout } = useAppSelector((state) => state.layout);

  return (
    <div>
      <div
        className={classNames(
          "grid gap-4 sm:gap-5 md:gap-6 lg:gap-7",
          {
            ["grid-cols-2 lg:grid-cols-3"]: plant_gallery_layout === "grid",
            ["grid-cols-1"]: plant_gallery_layout === "list",
          }
        )}
      >
        {!isLoading && !isError
          ? currentProducts?.map((product: ProductPropsI, index: number) => (
              <MemoizedProductCard key={product?._id ?? index} product={product} />
            ))
          : Array.from({ length: itemsPerPage }).map((_, index) => (
              <ProductSkeleton key={index} />
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
});

export default Products;
