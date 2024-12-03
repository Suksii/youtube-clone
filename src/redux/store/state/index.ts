import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Video, RelatedVideos } from "../../../types/types";
import { getHomePageVideos } from "../reducers/getHomePageVideos";

type InitialState = {
  videos: Video[];
  searchTerm: string;
  searchResults: [];
  relatedVideos: RelatedVideos[];
};

const initialState: InitialState = {
  videos: [],
  searchTerm: "",
  searchResults: [],
  relatedVideos: [],
};

const youtubeSlice = createSlice({
  name: "youtubeClone",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getHomePageVideos.fulfilled,
      (state, action: PayloadAction<Video[]>) => {
        state.videos = action.payload;
      }
    );
  },
});

export const { setSearchTerm } = youtubeSlice.actions;

export default youtubeSlice.reducer;
