import { Modal } from "antd";
import { FC } from "react";

import {
  CategoryList,
  PriceRange,
} from "@components/views/home/indoor-plant-collection/customs/cotegories/customs";
import { useAppDispatch, useAppSelector } from "@hooks/useRedux";
import { toggleCategoryModalVisibility } from "@redux/slices/modal";

const CategoryMenu: FC = () => {
  const { categoryModalVisibility } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();

  const onCancelHandler = () => dispatch(toggleCategoryModalVisibility(false));

  return (
    <Modal open={categoryModalVisibility} onCancel={onCancelHandler} footer={null}>
      <div className='px-[0px] py-[20px] flex flex-col gap-[36px]'>
        <CategoryList isMobile />
        <PriceRange />
      </div>
    </Modal>
  );
};

export default CategoryMenu;
