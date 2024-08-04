import { memo } from "react";
import { useTranslation } from "react-i18next";
import CustomSkeleton from "@tools/skeleton";

const SizeList = memo(() => {
  const { t } = useTranslation();

  return (
    <div>
      <h4 className='text-black text-[18px] font-bold leading-[16px] mb-[14px]'>
        {t("home_page.indoor_plant_gallery.categories.title_3")}
      </h4>

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
