import { configureStore } from "@reduxjs/toolkit";
import { notification, search } from "./slices";

export const store = configureStore({
  reducer: {
    search,
    notification
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
