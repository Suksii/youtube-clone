import { configureStore } from "@reduxjs/toolkit";
import homePageVideosReducer from "./slices/videosSlice";

export const store = configureStore({
  reducer: {
    homePageVideosSlice: homePageVideosReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
