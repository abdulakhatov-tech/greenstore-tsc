import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { AuthQuery, ProductPropsI } from "@type/index";
import useShoppingCartService from "@services/shopping-cart";
import useSearchParamsHook from "@hooks/useSearchParams";
import useWishlistService from "@services/wishlist";
import { useAppSelector } from "@hooks/useRedux";

const useProductCardFeatures = () => {
   const navigate = useNavigate();
  const { isAuthed } = useAppSelector(({ auth }) => auth);
   const { setParam } = useSearchParamsHook();
   const { addOrUpdateCartItem } = useShoppingCartService();
   const { wishlist, addCartItemToWishlist, removeFromWishlist } = useWishlistService();

   const [loading, setLoading] = useState(false)

   const isInWishlist = (product: ProductPropsI) =>  wishlist?.data?.some(
         (item: ProductPropsI) => item?._id === product?._id,
      );

   const addToWishlistHandlar = async(product: ProductPropsI) => {
      if (!isAuthed) {
         setParam('auth', AuthQuery.SignIn);
         
         return;
      }
      
      setLoading(true);
      await addCartItemToWishlist(product);
      setLoading(false);
   }

   const removeFromWishlistHandler = async (product: ProductPropsI) => {
      if (!isAuthed) {
         setParam('auth', AuthQuery.SignIn);
         
         return;
      }
      
      setLoading(true);
      await removeFromWishlist(product);
      setLoading(false);
    }

   const addToCartHandler = (product: ProductPropsI) => {
      if (!isAuthed) {
         setParam('auth', AuthQuery.SignIn);

         return;
      }

      addOrUpdateCartItem(product);
   };

   const viewProductHandler = (product: ProductPropsI) => {
      if (!isAuthed) {
         setParam('auth', AuthQuery.SignIn);

         return;
      }
   
      navigate(`/product/${product?.category}/${product?._id}`);
   };

   return { addToCartHandler, viewProductHandler, addToWishlistHandlar, removeFromWishlistHandler, isInWishlist, loading };
};

export default useProductCardFeatures;
