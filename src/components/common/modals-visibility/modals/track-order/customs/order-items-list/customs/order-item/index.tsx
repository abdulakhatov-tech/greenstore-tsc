import { FC } from "react";

import { Image } from "@generic/index";
import { OrderItemPropsI } from "./types";
import { formatPrice } from "@helpers/index";
import Tooltip from "@tools/tooltip";

const OrderItem: FC<OrderItemPropsI> = ({ main_image, title, _id, quantity, price }) => {
  return (
    <div className='bg-[#FBFBFB] h-[70px] w-full mt-[11px] grid grid-cols-[4fr_1fr] sm:grid-cols-[3fr_1fr] gap-3'>
      <div className='flex items-center gap-2 mr-4'>
        <Image src={main_image} alt={title} className='w-[70px] h-[70px]' />
        <div>
          <h3>{title}</h3>
          <Tooltip title={_id}>
            <p className='font-light text-[14px] mr-3 max-w-[100px] sm:max-w-[200px] overflow-hidden whitespace-nowrap truncate'>
              SKU: {_id}
            </p>
          </Tooltip>
        </div>
      </div>
      <div className='w-full flex items-end justify-center sm:items-center sm:justify-between flex-col sm:flex-row gap-[6px] sm:gap-8'>
        <div className=' flex items-center text-[#727272] justify-center'>
          (x {quantity})
        </div>
        <div className='flex items-center justify-between'>
          <h3 className='text-[18px] font-bold leading-4 text-green'>
            {formatPrice(Number(Number(quantity) * Number(price)))}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
