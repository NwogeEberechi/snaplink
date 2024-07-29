import { configureStore } from "@reduxjs/toolkit";
import { linksSlice } from "../components";

export const store = configureStore({
  reducer: {
    [linksSlice.name]: linksSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
