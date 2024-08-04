import classNames from "classnames";
import { memo } from "react";

import CustomSkeleton from "@tools/skeleton";
import { useAppSelector } from "@hooks/useRedux";

const ProductSkeleton = memo(() => {
  const { plant_gallery_layout } = useAppSelector(({ layout }) => layout);

  const isGrid = plant_gallery_layout === "list";
  const isList = plant_gallery_layout === "grid";

  return (
    <div
      className={classNames("grid gap-[20px]", {
        ["grid-cols-[1fr_1.3fr] md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_3fr] xl:grid-cols-[1fr_4fr]"]:
          isGrid,
        ["grid-cols-1"]: isList,
      })}
      role='presentation'
    >
      <div
        className={classNames(
          "relative w-full pb-[75%] max-h-[250px] min-h-[100px] min-w-[100px] flex items-center justify-center",
          {
            ["grid-cols-[1fr_1.3fr] md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_3fr] xl:grid-cols-[1fr_4fr]"]:
              isList,
          }
        )}
      >
        <CustomSkeleton
          type='image'
          active
          className='absolute h-full inset-0 object-cover mx-auto my-auto'
          style={{ width: "100%", height: "100%" }}
          aria-label='Loading product image'
        />
      </div>
      <div className={classNames("w-full flex flex-col gap-2")}>
        <CustomSkeleton
          type='input'
          active
          style={{ width: "50%" }}
          aria-label='Loading product title'
        />
        <CustomSkeleton
          type='input'
          active
          style={{ width: "50%" }}
          aria-label='Loading product price'
        />

        {isGrid && (
          <>
            <CustomSkeleton
              type='input'
              active
              style={{ width: "100%" }}
              aria-label='Loading product information'
            />
            <CustomSkeleton
              type='input'
              active
              style={{ width: "100%" }}
              aria-label='Loading product information'
            />
            <CustomSkeleton
              type='input'
              active
              style={{ width: "100%" }}
              aria-label='Loading product information'
            />
          </>
        )}
      </div>
    </div>
  );
});

export default ProductSkeleton;
