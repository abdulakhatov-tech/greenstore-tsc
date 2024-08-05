import { FC } from 'react';
import { OrderSummaryItemPropsI } from './types';

const OrderSummaryItem:FC<OrderSummaryItemPropsI> = ({ label, value, isDiscount = false }) => {
   return (
      <div className="flex items-center justify-between">
         <h4 className="text-[16px] font-normal leading-4 text-black">
            {label}
         </h4>
         <span className="flex-grow mx-[20px] border-t-[0.5px] border-[rgba(128,128,128,0.21)]"></span>
         <strong className={`text-[18px] leading-4 font-semibold text-black ${isDiscount ? 'text-red-500' : ''}`}>
            {isDiscount ? `(-) ${value}` : value}
         </strong>
      </div>
   );
};

export default OrderSummaryItem;
