import { configureStore } from "@reduxjs/toolkit";
import { layout, modal, notification, product, relatedProducts, search, shoppingCart } from "./slices";

export const store = configureStore({
  reducer: {
    search,
    notification,
    modal,
    layout,
    shoppingCart,
    relatedProducts,
    product
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
