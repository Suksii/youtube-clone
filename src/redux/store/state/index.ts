import { createSlice } from "@reduxjs/toolkit";
import { Video } from "../../../types/types";

type InitialState = {
  videos: Video[];
};

const initialState: InitialState = {
  videos: [],
};

const youtubeSlice = createSlice({
  name: "youtubeClone",
  initialState,
  reducers: {},
//   extraReducers: (builder = {}),
});

export default youtubeSlice.reducer;
