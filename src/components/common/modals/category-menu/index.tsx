import { Modal } from "antd";
import { FC } from "react";

import {
  CategoryList,
  PriceRange,
  SizeList,
} from "@components/views/home/indoor-plant-collection/customs/cotegories/customs";
import SortBy from "@components/views/home/indoor-plant-collection/customs/plant-gallery/customs/sortby";
import { useAppDispatch, useAppSelector } from "@hooks/useRedux";
import { toggleCategoryModalVisibility } from "@redux/slices/modal";

const CategoryMenu: FC = () => {
  const { categoryModalVisibility } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();

  const onCancelHandler = () => dispatch(toggleCategoryModalVisibility());

  return (
    <Modal open={categoryModalVisibility} onCancel={onCancelHandler} footer={null}>
      <div className='px-[0px] py-[20px] flex flex-col gap-[36px]'>
        <div>
          <h4 className='text-black text-[18px] font-bold leading-[16px] mb-[14px] '>
            Sort By
          </h4>
          <div className='pl-[12px]'>
            <SortBy className='w-full h-8' />
          </div>
        </div>
        <CategoryList />
        <PriceRange />
        <SizeList />
      </div>
    </Modal>
  );
};

export default CategoryMenu;
