import { FC } from "react";
import { MockData } from "@utils/index";
import ListItem from "./list-item";
import SelectBy from "./select-by";

const PlantNavigation: FC = () => {
  const { plant_gallery_navigation } = MockData();

  return (
    <>
      <ul className='hidden sm:flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 lg:gap-8;'>
        {plant_gallery_navigation.map((item) => (
          <ListItem key={item?._id} {...item} />
        ))}
      </ul>
      <div className='block sm:hidden'>
        <SelectBy />
      </div>
    </>
  );
};

export default PlantNavigation;
