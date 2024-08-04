import CustomSkeleton from "@tools/skeleton";
import useCategoryListFeatures from "./features";
import CategoryItem from "./category-item";
import { CategoryPropsI } from "@type/index";
import { useTranslation } from "react-i18next";
import { memo } from "react";

const CategoryList = memo(() => {
  const { t } = useTranslation();
  const { isLoading, data: categories, isError } = useCategoryListFeatures();

  return (
    <div>
      <h4 className='text-black text-[18px] font-bold leading-[16px] mb-[14px]'>
        {t("home_page.indoor_plant_gallery.categories.title_1")}
      </h4>

      <ul className='flex flex-col gap-[2px] md:gap-1  lg:gap-2 pl-[12px] text-[14px]'>
        {isLoading || isError
          ? Array.from({ length: 9 }, (_, i) => i + 1).map((category) => (
              <CustomSkeleton
                type='input'
                key={category}
                block
                active
                paragraph={false}
              />
            ))
          : categories?.map((category: CategoryPropsI) => (
              <CategoryItem key={category._id} {...category} />
            ))}
      </ul>
    </div>
  );
});

export default CategoryList;
