import { useTranslation } from "react-i18next";
import { FC, memo } from "react";

import Title from "@generic/typography";
import CategoryItem from "./category-item";
import { CategoryPropsI } from "@type/index";
import CustomSkeleton from "@tools/skeleton";
import useCategoryListFeatures from "./features";

const CategoryList:FC = memo(() => {
  const { t } = useTranslation();
  const { isLoading, data: categories, isError } = useCategoryListFeatures();

  return (
    <div>
      <Title size='h4' className='font-bold mb-[14px]'>
        {t("home_page.indoor_plant_gallery.categories.title_1")}
      </Title>

      <ul className='flex flex-col gap-3 pl-[12px] text-[14px]'>
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
