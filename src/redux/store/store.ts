import { configureStore } from "@reduxjs/toolkit";
import youtubeReducer from "./slices/videosSlice";

export const store = configureStore({
  reducer: {
    youtubeClone: youtubeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
