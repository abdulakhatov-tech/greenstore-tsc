import { Empty } from "antd";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { memo, useEffect } from "react";

import { CartProduct } from "./customs";
import Button from "@generic/button";
import useShoppingCartService from "@services/shopping-cart";
import { useAppDispatch } from "@hooks/useRedux";
import { setRelatedProducts } from "@redux/slices/related-products";

const CartProducts = memo(() => {
   const navigate = useNavigate();
   const { t } = useTranslation()
   const { cart } = useShoppingCartService();

   const dispatch = useAppDispatch();

   useEffect(() => {
      const category = cart?.find(c => c.category)?.category

      dispatch(setRelatedProducts(category))
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [cart])

   return (
      <div className="w-full">
         <div className="pb-[11px] border-b border-[#46A35880] grid grid-cols-[3fr_1fr] sm:grid-cols-[3fr_1fr_2fr_1.5fr] max-lg:hidden">
            <h3 className="">{t('shopping_cart.products')}</h3>
            <h3 className="text-center">{t('shopping_cart.price')}</h3>
            <h3 className="text-center">{t('shopping_cart.quantity')}</h3>
            <h3>{t('shopping_cart.total')}</h3>
         </div>
         <div className="flex flex-col gap-5 mt-[11px] max-h-[500px] overflow-y-auto">
            {cart?.length ? (
               cart?.map((product, idx) => <CartProduct key={product?._id || idx} product={product} />)
            ) : (
               <div className="w-[100%] flex flex-col items-center">
                  <Empty />
                  <Button
                     variant="primary"
                     className="h-[40px] px-[10px] mt-[10px]"
                     onClick={() => navigate("/")}
                  >
                    {`Let's shop`}
                  </Button>
               </div>
            )}
         </div>
      </div>
   );
});

export default CartProducts;
