import { Store, configureStore } from "@reduxjs/toolkit";
import { linksSlice } from "../features/links/linksSlice";

export const store: Store = configureStore({
  reducer: {
    [linksSlice.name]: linksSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
