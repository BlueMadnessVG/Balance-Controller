import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./states/auth";

export default configureStore({
  reducer: {
    auth: authSliceReducer,
  },
});
