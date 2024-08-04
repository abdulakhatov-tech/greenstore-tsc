import {
  UnorderedListOutlined,
  AppstoreOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { FC, memo } from "react";

import { PlantNavigation } from "./customs";
import Tooltip from "@tools/tooltip";
import { setPlantGalleryLayout } from "@redux/slices/layout";
import { useAppDispatch, useAppSelector } from "@hooks/useRedux";
import SortBy from "../sortby";
import { toggleCategoryModalVisibility } from "@redux/slices/modal";

const Header: FC = memo(() => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { plant_gallery_layout } = useAppSelector((state) => state.layout);

  return (
    <nav className='flex items-center justify-between'>
      <PlantNavigation />

      <div className='flex items-center gap-4'>
        {plant_gallery_layout === "grid" ? (
          <Tooltip
            title={t("home_page.indoor_plant_gallery.products.layout_change")}
          >
            <AppstoreOutlined
              onClick={() => dispatch(setPlantGalleryLayout("list"))}
              className='text-[18px] md:text-[23px] text-black block cursor-pointer hover:text-green'
            />
          </Tooltip>
        ) : (
          <Tooltip
            title={t("home_page.indoor_plant_gallery.products.layout_change")}
          >
            <ProfileOutlined
              onClick={() => dispatch(setPlantGalleryLayout("grid"))}
              className='text-[18px] md:text-[23px] text-black block cursor-pointer hover:text-green'
            />
          </Tooltip>
        )}

        <Tooltip title={t("home_page.indoor_plant_gallery.categories.title_1")}>
          <UnorderedListOutlined
            onClick={() => dispatch(toggleCategoryModalVisibility())}
            className='text-[18px] md:text-[23px] text-black block lg:hidden cursor-pointer hover:text-green'
          />
        </Tooltip>

        <Tooltip title={t("indoor_plant_gallery.products.sort_by")}>
          <SortBy />
        </Tooltip>
      </div>
    </nav>
  );
});

export default Header;
