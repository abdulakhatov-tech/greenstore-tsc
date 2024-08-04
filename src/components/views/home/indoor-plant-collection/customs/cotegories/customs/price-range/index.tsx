import { Slider } from "antd";
import { useTranslation } from "react-i18next";

import { memo } from "react";

import Button from "@generic/button";
import { formatPrice } from "@helpers/index";
import usePriceRangeFeatures from "./features";

const PriceRange: React.FC = memo(() => {
  const { t } = useTranslation();
  const { range, onSliderChange, filterHandler } = usePriceRangeFeatures();

  return (
    <div>
      <h4 className='text-black text-[18px] font-bold leading-[16px] mb-[14px]'>
        {t("home_page.indoor_plant_gallery.categories.title_2")}
      </h4>

      <div className='pl-[12px]'>
        <Slider
          range
          defaultValue={range}
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

        <Button onClick={filterHandler} variant='primary' type='button'>
          {t("home_page.indoor_plant_gallery.categories.filter")}
        </Button>
      </div>
    </div>
  );
});

export default PriceRange;
