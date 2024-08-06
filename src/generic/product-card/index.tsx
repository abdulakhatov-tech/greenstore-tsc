import { FC, memo } from "react";
import {
  ShoppingCartOutlined,
  HeartOutlined,
  SearchOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { FaHeart } from "react-icons/fa";
import classNames from "classnames";

import Image from "../image";
import { ProductPropsI } from "@type/index";
import { formatPrice } from "@helpers/index";
import { useAppSelector } from "@hooks/useRedux";
import useProductCardFeatures from "./features";
import styles from "./style.module.css";

const ProductCard: FC<{ product: ProductPropsI }> = memo(({ product }) => {
  const { plant_gallery_layout } = useAppSelector(({ layout }) => layout);

  const {
    addToCartHandler,
    viewProductHandler,
    addToWishlistHandlar,
    removeFromWishlistHandler,
    loading,
    isInWishlist,
  } = useProductCardFeatures();

  return (
    <div
        className={classNames(
          `grid h-fit rounded-xl ${styles.card}`,
          {
            ["grid-cols-1"]: plant_gallery_layout === "list",
            ["grid-cols-[1fr_1.3fr] md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_3fr] xl:grid-cols-[1fr_4fr] bg-bgGray p-2"]:
              plant_gallery_layout !== "grid",
          }
        )}
      >
        <div
          className={classNames(
            "relative w-full pb-[75%] max-h-[250px] min-h-[100px] min-w-[100px] flex items-center justify-center",
            {
              ["grid-cols-[1fr_1.5fr] md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_3fr] xl:grid-cols-[1fr_4fr] bg-bgGray p-2"]:
                plant_gallery_layout === "list",
            }
          )}
        >
          <Image
            src={
              product?.main_image
                ? product?.main_image
                : "https://eclida.ru/files/noimg.png"
            }
            alt={product?.title || "no-image"}
            className='absolute h-full inset-0 object-cover mx-auto my-auto'
          />

          <ul
            className={`hidden absolute bottom-2 left-[50%] translate-x-[-50%] items-center justify-center gap-1 md:gap-3 text-[22px] text-green ${styles.actions}`}
          >
            <li
              className=' bg-white text-[18px] md:text-[20px] w-[25px] md:w-[30px] h-[25px] md:h-[30px] rounded-md flex items-center justify-center active:scale-[0.98] active:text-green hover:scale-[1.3] transition-all hover:text-black hover:font-bold'
              onClick={() => addToCartHandler(product)}
            >
              <ShoppingCartOutlined />
            </li>
            <li className=' bg-white text-[18px] md:text-[20px] w-[25px] md:w-[30px] h-[25px] md:h-[30px] rounded-md flex items-center justify-center active:scale-[0.98] active:text-green hover:scale-[1.3] transition-all hover:text-black hover:font-bold'>
              {loading ? (
                <LoadingOutlined />
              ) : isInWishlist(product) ? (
                <FaHeart onClick={() => removeFromWishlistHandler(product)} />
              ) : (
                <HeartOutlined onClick={() => addToWishlistHandlar(product)} />
              )}
            </li>
            <li
              className=' bg-white text-[18px] md:text-[20px] w-[25px] md:w-[30px] h-[25px] md:h-[30px] rounded-md flex items-center justify-center active:scale-[0.98] active:text-green hover:scale-[1.3] transition-all hover:text-black hover:font-bold'
              onClick={() => viewProductHandler(product)}
            >
              <SearchOutlined />
            </li>
          </ul>
        </div>

        <div
          className={classNames({
            ["py-3"]: plant_gallery_layout === "list",
            ["py-3 px-2"]: plant_gallery_layout === "grid",
          })}
        >
          <h3
            className={`text-[14px] sm:text-[16px] md:text-[18px] leading-5 font-semibold text-black mb-2 ${styles.titleTruncated}`}
          >
            {product?.title || "no-title"}
          </h3>
          <p
            className={`text-green text-[14px] sm:text-[16px] md:text-[18px] leading-4 font-bold h-[25px] ${styles.titleTruncated}`}
          >
            {formatPrice(product?.price || 0)}
          </p>
          {plant_gallery_layout === "list" ? (
            <p
              className={`flex  ${styles.titleTruncated}`}
              dangerouslySetInnerHTML={{
                __html: product?.description.slice(0, 160),
              }}
            />
          ) : (
            <></>
          )}
        </div>
      </div>
  );
});

const MemoizedProductCard = memo(ProductCard);

export default MemoizedProductCard;
