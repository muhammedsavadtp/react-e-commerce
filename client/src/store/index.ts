import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slice/cartSlice";
import userSlice from "./slice/userSlice";
export const store = configureStore({
  reducer: {
    cartSlice,
    userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;