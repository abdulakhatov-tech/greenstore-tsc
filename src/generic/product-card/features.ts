import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { useAuth } from "@config/auth";
import { ProductPropsI } from "@type/index";
import useShoppingCartService from "@services/shopping-cart";
import { AuthQuery } from "@components/common/modals/auth/types";
import useSearchParamsHook from "@hooks/useSearchParams";
import useWishlistService from "@services/wishlist";

const useProductCardFeatures = () => {
   const navigate = useNavigate();
   const { isAuthed } = useAuth();
   const { setParam } = useSearchParamsHook();
   const { addOrUpdateCartItem } = useShoppingCartService();
   const { wishlist, addCartItemToWishlist, removeFromWishlist } = useWishlistService();

   const [loading, setLoading] = useState(false)

   const isInWishlist = (product: ProductPropsI) =>  wishlist?.data?.some(
         (item: ProductPropsI) => item?._id === product?._id,
      );

   const addToWishlistHandlar = async(product: ProductPropsI) => {
      setLoading(true);
      if (!isAuthed()) {
         setParam('auth', AuthQuery.SignIn);

         return;
      }
      
      await addCartItemToWishlist(product);
      setLoading(false);
   }

   const removeFromWishlistHandler = async (product: ProductPropsI) => {
      setLoading(true);
      if (!isAuthed()) {
         setParam('auth', AuthQuery.SignIn);

         return;
      }
      
      await removeFromWishlist(product)
      setLoading(false);
    }

   const addToCartHandler = (product: ProductPropsI) => {
      if (!isAuthed()) {
         setParam('auth', AuthQuery.SignIn);

         return;
      }

      addOrUpdateCartItem(product);
   };

   const viewProductHandler = (product: ProductPropsI) => {
      if (!isAuthed()) {
         setParam('auth', AuthQuery.SignIn);

         return;
      }
      
      navigate(`/shop/product/${product?.category}/${product?._id}`);
   };

   return { addToCartHandler, viewProductHandler, addToWishlistHandlar, removeFromWishlistHandler, isInWishlist, loading };
};

export default useProductCardFeatures;
