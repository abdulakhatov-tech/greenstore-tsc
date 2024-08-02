import { configureStore } from "@reduxjs/toolkit";
import { modal, notification, search } from "./slices";

export const store = configureStore({
  reducer: {
    search,
    notification,
    modal
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
