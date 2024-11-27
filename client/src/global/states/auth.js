import { createSlice } from "@reduxjs/toolkit";
import {
  clearLocalStorage,
  persistLocalStorage,
} from "../../utils/localStorage.utility";

export const EmptyAuthState = {
  token: null,
};

export const AuthKey = "token";

export const authSlice = createSlice({
  name: "auth",
  initialState: localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token"))
    : EmptyAuthState,
  reducers: {
    setCredentials: (_state, action) => {
      persistLocalStorage(AuthKey, action.payload);
      return action.payload;
    },
    updateCredentials: (state, action) => {
      const result = { ...state, ...action.payload };
      persistLocalStorage(AuthKey, result);
      return result;
    },
    logOut: (_state, _action) => {
      clearLocalStorage(AuthKey);
      return EmptyAuthState;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;
