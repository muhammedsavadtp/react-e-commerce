import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface userState {
    userAuth: boolean;
    userDetails:any
}

const initialState: userState = {
  userAuth: false,
  userDetails: {},
};

export const userSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    SetUser: (state, action: PayloadAction<boolean>) => {
      state.userAuth = action.payload;
    },
    SetUserDetails: (state, action: PayloadAction<boolean>) => {
      state.userAuth = action.payload;
    },
  },
});

export const { SetUser, SetUserDetails } = userSlice.actions;
export default userSlice.reducer;
