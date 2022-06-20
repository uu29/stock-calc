import { configureStore } from "@reduxjs/toolkit";
import reducer from "./slices";

const devMode = process.env.NODE_ENV === "development";

export const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: devMode,
});
