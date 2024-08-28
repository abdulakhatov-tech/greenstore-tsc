import { Empty } from "antd";
import { useTranslation } from "react-i18next";

import { HeartOutlined } from "@ant-design/icons";

import useOnlineStatus from "@hooks/useOnlineStatus";
import useWishlistService from "@services/wishlist";
import ProductSkeleton from "@tools/product-skeleton";
import { ProductPropsI } from "@type/index";
import MemoizedProductCard from "./product-card";

const Likes: React.FC = () => {
  const { t } = useTranslation();
  const isOnline = useOnlineStatus();
  const { wishlist } = useWishlistService();
  const { isLoading, isError, data: products } = wishlist;

  const loading = isLoading || isError || !isOnline;

  return (
    <div>
      <div className='my-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px]'>
        {loading
          ? Array.from({ length: 8 }).map((_, index) => (
              <ProductSkeleton key={index} />
            ))
          : products?.length &&
            products?.map((product: ProductPropsI, index: number) => (
              <MemoizedProductCard
                key={product._id ?? index}
                product={product}
              />
            ))}
      </div>

      {!products?.length && (
        <div className='h-[400px] flex flex-col items-center justify-center'>
          <Empty
            description={
              <h3 className='text-[18px] text-bold'>
                <HeartOutlined /> {t("user.no_products_yet")}...
              </h3>
            }
          />
        </div>
      )}
    </div>
  );
};

export default Likes;
