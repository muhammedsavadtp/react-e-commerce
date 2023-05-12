import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface cartState {
  Visible: boolean;
}

const initialState: cartState = {
  Visible: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    DisplayCart: (state, action: PayloadAction<boolean>) => {
      state.Visible = action.payload;
    },
  },
});

export const { DisplayCart } = cartSlice.actions;
export default cartSlice.reducer;
