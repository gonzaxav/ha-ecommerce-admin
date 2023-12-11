import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: null,
  reducers: {
    login(state, action) {
      return action.payload;
    },

    logout(state, action) {
      return null;
    },
  },
});

const { actions, reducer } = adminSlice;
export const { login } = actions;
export const { logout } = actions;
export default reducer;
