import { Slider } from "antd";
import { useTranslation } from "react-i18next";

import { memo } from "react";

import Button from "@generic/button";
import { formatPrice } from "@helpers/index";
import usePriceRangeFeatures from "./features";
import Title from "@generic/typography";

const PriceRange: React.FC = memo(() => {
  const { t } = useTranslation();
  const { range, onSliderChange, filterHandler, resetHandler } =
    usePriceRangeFeatures();

  return (
    <div>
      <Title size='h4' className='font-bold mb-[14px]'>
        {t("home_page.indoor_plant_gallery.categories.title_2")}
      </Title>

      <div className='pl-[12px]'>
        <Slider
          range
          value={range}
          onChange={onSliderChange}
          id='slider'
          min={1}
          max={1500}
        />

        <p className='py-[15px] text-[15px] leading-4 font-normal'>
          {t("home_page.indoor_plant_gallery.categories.price")}:{" "}
          <span className='text-green font-bold'>
            {formatPrice(range[0])} - {formatPrice(range[1])}
          </span>
        </p>

        <div className='flex items-center flex-wrap gap-[2px]'>
          <Button onClick={filterHandler} variant='primary' type='button' size='small'>
            {t("home_page.indoor_plant_gallery.categories.filter")}
          </Button>

          <Button onClick={resetHandler} variant='secondary' type='button' size='small'>
            {t("home_page.indoor_plant_gallery.categories.reset")}
          </Button>
        </div>
      </div>
    </div>
  );
});

export default PriceRange;
