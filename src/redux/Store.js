import { configureStore } from "@reduxjs/toolkit";
import userDetail from "./users";
export const store = configureStore({
  reducer: {
    app: userDetail,
  },
});
