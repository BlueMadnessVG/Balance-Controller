import { createSlice } from "@reduxjs/toolkit";

export const EmptyUserState = {
  user: null,
  token: null,
};

export const UserKey = "auth";

export const authSlice = createSlice({
  name: "user",
  initialState: EmptyUserState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, accessToken } = action.payload;
      (state.user = user), (state.token = accessToken);
    },
    logOut: (state, _action) => {
      (state.user = null), (state.token = null);
    },
  },
});

export const { setCredentials, logOut } = authSlice.action;
export default authSlice.reducer;
