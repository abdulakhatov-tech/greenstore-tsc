import { Empty } from "antd";
import { useTranslation } from "react-i18next";

import { ShoppingCartOutlined } from "@ant-design/icons";

import MemoizedProductCard from "@generic/product-card";
import useMyProductsService from "@services/my-products";
import ProductSkeleton from "@tools/product-skeleton";
import useOnlineStatus from "@hooks/useOnlineStatus";
import { ProductPropsI } from "@type/index";

const Products: React.FC = () => {
  const { t } = useTranslation();
  const isOnline = useOnlineStatus();
  const { myProducts } = useMyProductsService();

  const { isLoading, isError, data: products } = myProducts;
  const loading = isLoading || isError || !isOnline;

  return (
    <div>
      <div className='my-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px]'>
        {loading
          ? Array.from({ length: 8 }).map((_, index) => (
              <ProductSkeleton key={index} />
            ))
          : products?.length ?
            products?.map((product: ProductPropsI, index: number) => (
              <MemoizedProductCard
                key={product._id ?? index}
                product={product}
              />
            )) : ''}
      </div>

      {!products?.length ? (
        <div className='h-[400px] flex flex-col items-center justify-center'>
          <Empty
            description={
              <h3 className='text-[18px] text-bold'>
                <ShoppingCartOutlined /> {t("user.no_products_yet")}...
              </h3>
            }
          />
        </div>
      ) : ''}
    </div>
  );
};

export default Products;
