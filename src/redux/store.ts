import { configureStore } from "@reduxjs/toolkit";
import { auth, layout, modal, notification, product, relatedProducts, search, shoppingCart } from "./slices";

export const store = configureStore({
  reducer: {
    search,
    notification,
    modal,
    layout,
    shoppingCart,
    relatedProducts,
    product,
    auth
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
