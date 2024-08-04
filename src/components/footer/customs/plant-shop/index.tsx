import { MockData } from "@utils/index";
import useOnlineStatus from "@hooks/useOnlineStatus";

import CustomSkeleton from "@tools/skeleton";
import { PlantFeature, Newsletter } from "./customs";

const PlantShopFooter = () => {
  const { footer_navigation } = MockData();
  const isOnline = useOnlineStatus();

  return (
    <div className='grid grid-cols-1 md:grid-cols-[1fr_1fr] xl:grid-cols-[1fr_1fr_1fr_1.5fr] gap-4 bg-[#FBFBFB] px-[22px] py-[33px]'>
      {isOnline
        ? footer_navigation?.plant_fetures?.map((item, idx) => (
            <PlantFeature key={item?._id || idx} {...item} />
          ))
        : Array.from({ length: 3 }).map((_, idx) => (
            <div
              key={idx}
              className='flex flex-col gap-3 items-center xl:items-start'
            >
              <CustomSkeleton
                type='image'
                style={{ width: "200px", height: "200px" }}
                active
              />
              <CustomSkeleton type='input' active />
              <CustomSkeleton type='input' active />
            </div>
          ))}
      <Newsletter className='pt-10' />
    </div>
  );
};

export default PlantShopFooter;
