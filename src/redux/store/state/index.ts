import { createSlice } from "@reduxjs/toolkit";
import { Video, RelatedVideos } from "../../../types/types";

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
  // extraReducers: (builder = {}),
});

export default youtubeSlice.reducer;
