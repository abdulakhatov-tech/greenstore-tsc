import CustomSkeleton from "@tools/skeleton";
import useOnlineStatus from "@hooks/useOnlineStatus";
import useDiscountImageService from "@services/discount-image";
import { CategoryList, DiscountImage, PriceRange } from "./customs";

const Categories = () => {
  const { isLoading, isError } = useDiscountImageService();
  const isOnline = useOnlineStatus();

  return (
    <aside className='hidden md:block w-[250px] lg:w-[310px] bg-bgGray h-fit'>
      <div className='px-[18px] py-[22px] flex flex-col gap-[36px]'>
        <CategoryList />
        <PriceRange />
      </div>
      <div className='w-full overflow-hidden flex items-center justify-center'>
        {isOnline && !isLoading && !isError ? (
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
