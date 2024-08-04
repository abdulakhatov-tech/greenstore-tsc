import { configureStore } from "@reduxjs/toolkit";
import { layout, modal, notification, search, shoppingCart } from "./slices";

export const store = configureStore({
  reducer: {
    search,
    notification,
    modal,
    layout,
    shoppingCart
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
