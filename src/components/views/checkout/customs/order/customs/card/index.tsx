import { Descriptions } from "antd";
import { FC } from "react";

import Tooltip from "@tools/tooltip";
import { CartPropsI } from "./types";
import { Image } from "@generic/index";
import { formatPrice } from "@helpers/index";

const Card: FC<CartPropsI> = ({ main_image, title, _id, quantity, price }) => {
  const totalPrice = quantity * parseFloat(price);

  return (
    <div className='bg-[#FBFBFB] w-full py-[1px] mt-[11px] flex justify-between items-center '>
      <div className={`flex items-center gap-2`}>
        <div className='w-[70px] h-[70px] flex-shrink-0 overflow-hidden'>
          <Image
            src={main_image}
            alt={title}
            className='w-full h-full object-cover'
          />
        </div>
        <div className='flex flex-col gap-[6px]'>
          <h3>{title}</h3>
          <Descriptions>
            <Descriptions.Item
              label='SKU'
            >
              <Tooltip title={_id}>
                  <span className='text-[14px] mr-3 font-light max-w-[175px] overflow-hidden whitespace-nowrap truncate'>
                     {_id}
                  </span>
              </Tooltip>
            </Descriptions.Item>
            
          </Descriptions>
        </div>
      </div>
      <div className='flex items-end justify-between flex-col sm:flex-row gap-[2px] sm:gap-[10px] min-w-[100px]'>
        <div className='flex items-center justify-center'>
          <span className='text-[#727272]'>(x {quantity})</span>
        </div>
        <div className='flex items-center justify-between'>
          <h3>{formatPrice(totalPrice)}</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
