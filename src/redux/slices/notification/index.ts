import { createSlice } from "@reduxjs/toolkit";
import { initialStateT } from "./types";

const initialState: initialStateT = {
   type: "",
   message: "",
   description: "",
};

export const notificationSlice = createSlice({
   name: "notification",
   initialState,
   reducers: {
      setNotification: (state, action) => {
        const { type, message, description } = action.payload;
        
         state.type = type;
         state.message = message;
         state.description = description;
      },
      closeNotification: () => initialState,
   },
});

export const { setNotification, closeNotification } = notificationSlice.actions;

export default notificationSlice.reducer;
