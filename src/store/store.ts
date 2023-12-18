import { configureStore } from "@reduxjs/toolkit";
import widgetSlice from "./widgetSlice";

export const store = configureStore({
  reducer: {
    widget: widgetSlice,
  },
  devTools: process.env.NODE_ENV === "development",
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
