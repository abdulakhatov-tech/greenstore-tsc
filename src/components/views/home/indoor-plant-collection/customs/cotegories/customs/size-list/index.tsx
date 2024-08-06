import { memo } from "react";
import { useTranslation } from "react-i18next";
import CustomSkeleton from "@tools/skeleton";
import Title from "@generic/typography";

const SizeList = memo(() => {
  const { t } = useTranslation();

  return (
    <div>
      <Title size='h4' className='font-bold mb-[14px]'>
        {t("home_page.indoor_plant_gallery.categories.title_3")}
      </Title>

      <ul className='flex flex-col gap-2 pl-[12px] text-[14px]'>
        {Array.from({ length: 3 }, (_, i) => i + 1).map((category) => (
          <CustomSkeleton
            key={category}
            type='input'
            block
            active
            paragraph={false}
          />
        ))}
      </ul>
    </div>
  );
});

export default SizeList;
