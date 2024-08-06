import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { FC } from "react";

import useShoppingCartService from "@services/shopping-cart";
import { CartProductPropsI } from "@type/index";
import { CounterPropsI } from "./types";
import Button from "@generic/button";

const Counter: FC<CounterPropsI> = ({ product }) => {
  const { cart, updateProductQuantity } = useShoppingCartService();

  const selectedProduct = cart.find(
    (item: CartProductPropsI) => item._id === product._id
  );

  return (
    <div className='flex items-center gap-4'>
      <Button
        type='button'
        variant='primary'
        className='rounded-[50%]'
        onClick={() => updateProductQuantity(product, false)}
      >
        <MinusOutlined />
      </Button>
      <span className='w-[15px] text-center'>
        {selectedProduct?.quantity ?? 1}
      </span>
      <Button
        type='button'
        variant='primary'
        className='rounded-[45%]'
        onClick={() => updateProductQuantity(product)}
      >
        <PlusOutlined />
      </Button>
    </div>
  );
};

export default Counter;
