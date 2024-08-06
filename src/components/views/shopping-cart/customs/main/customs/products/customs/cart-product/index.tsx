import { Descriptions } from "antd";
import { FC } from "react";

import Tooltip from "@tools/tooltip";
import { formatPrice } from "@helpers/index";
import { Button, Image } from "@generic/index";
import { CartProductPropsI } from "@type/index";
import useShoppingCartService from "@services/shopping-cart";
import { MinusOutlined, PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

const CartProduct: FC<{ product: CartProductPropsI }> = ({ product }) => {
  const { t } = useTranslation();
  const { main_image, title, _id, price, quantity } = product;
  const { updateProductQuantity, removeCartItem } = useShoppingCartService();

  return (
    <div className='bg-[#FBFBFB] h-fit py-3 sm:h-[100px] w-full grid grid-cols-[3fr_1fr]  sm:grid-cols-[3fr_1fr_2fr_1.5fr]'>
      <div className='flex items-center gap-2'>
        <Image
          //    type={"image"}
          src={main_image}
          alt={title}
          className='w-[70px] h-[70px]'
        />
        <div className='flex flex-col justify-center'>
          <h3>{title}</h3>
          <Descriptions className='font-light text-[14px] mr-4' column={1}>
            <Descriptions.Item label='SKU'>
              <Tooltip title={_id}>
                  <span className='max-w-[175px] overflow-hidden whitespace-nowrap truncate'>
                     {_id}
                  </span>
              </Tooltip>
            </Descriptions.Item>
          </Descriptions>
        </div>
      </div>
      <h3 className='flex items-center justify-center text-[#727272] text-[16px] font-medium leading-4'>
        {formatPrice(price)}
      </h3>
      <div className='flex items-center justify-center gap-3'>
        <Button
          type='button'
          variant='primary'
          className='w-[30px]'
          onClick={() => updateProductQuantity(product, false)}
        >
          <MinusOutlined />
        </Button>
        <span className='w-[15px] text-center text-[17px] font-normal leading-2 text-black'>
          {quantity}
        </span>
        <Button
          type='button'
          variant='primary'
          className='w-[30px]'
          onClick={() => updateProductQuantity(product)}
        >
          <PlusOutlined />
        </Button>
      </div>
      <div className='flex items-center flex-col sm:flex-row justify-center sm:justify-between gap-3 sm:pr-[15px]'>
        <h3 className='text-[16px] font-bold leading-4 text-green'>
          {formatPrice(price * quantity)}
        </h3>
        <Tooltip title={t("shopping_cart.remove")}>
          <DeleteOutlined
            className='cursor-pointer hover:text-[crimson] active:scale-95 text-[#727272] text-[20px]'
            onClick={() => removeCartItem(product)}
          />
        </Tooltip>
      </div>
    </div>
  );
};

export default CartProduct;
