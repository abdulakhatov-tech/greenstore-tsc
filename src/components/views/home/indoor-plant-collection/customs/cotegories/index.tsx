import useOnlineStatus from "@hooks/useOnlineStatus";
import { CategoryList, DiscountImage, PriceRange } from "./customs";
import useDiscountImageFeatures from "./customs/discount-image/features";
import CustomSkeleton from "@tools/skeleton";

const Categories = () => {
  const { imageLoading, error } = useDiscountImageFeatures();
  const isOnline = useOnlineStatus();

  return (
    <aside className='hidden md:block w-[250px] lg:w-[310px] bg-bgGray h-fit'>
      <div className='px-[18px] py-[22px] flex flex-col gap-[36px]'>
        <CategoryList />
        <PriceRange />
      </div>
      <div className='w-full overflow-hidden flex items-center justify-center'>
        {isOnline && !imageLoading && !error ? (
          <DiscountImage />
        ) : (
          <CustomSkeleton
            type='image'
            active
            style={{ width: "200px", height: "300px" }}
            className='lg:mb-3'
          />
        )}
      </div>
    </aside>
  );
};

export default Categories;
