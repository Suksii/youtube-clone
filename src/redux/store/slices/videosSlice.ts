import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Video, RelatedVideos, Channel } from "../../../types/types";
import {
  getChannelDetails,
  getHomePageVideos,
  getVideoById,
  getVideosByCategory,
} from "../reducers/getHomePageVideos";

type InitialState = {
  videos: Video[];
  channel: Channel | null;
  video: Video | null;
  searchTerm: string;
  searchResults: Video[];
  nextPageToken?: string | null | undefined;
  loading: boolean;
  error: string | null | undefined;
  relatedVideos: RelatedVideos[];
};

const initialState: InitialState = {
  videos: [],
  video: null,
  channel: null,
  searchTerm: "All",
  searchResults: [],
  nextPageToken: null,
  loading: false,
  error: null,
  relatedVideos: [],
};

const homePageVideosSlice = createSlice({
  name: "homePageVideos",
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getHomePageVideos.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getHomePageVideos.fulfilled,
        (
          state,
          action: PayloadAction<{
            items: Video[];
            nextPageToken: string | null | undefined;
          }>
        ) => {
          state.loading = false;
          state.videos = action.payload.items;
          state.nextPageToken = action.payload.nextPageToken;
          state.searchResults = action.payload.items;
          state.searchTerm = "All";
        }
      )
      .addCase(getHomePageVideos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(
        getVideosByCategory.fulfilled,
        (
          state,
          action: PayloadAction<{
            items: Video[];
            nextPageToken: string | null | undefined;
            searchTerm: string;
          }>
        ) => {
          state.loading = false;
          state.videos = action.payload.items;
          state.nextPageToken = action.payload.nextPageToken;
          state.searchResults = action.payload.items;
          state.searchTerm = action.payload.searchTerm;
        }
      )
      .addCase(getVideoById.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getVideoById.fulfilled,
        (state, action: PayloadAction<Video>) => {
          state.loading = false;
          state.video = action.payload;
        }
      )
      .addCase(getVideoById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getChannelDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(getChannelDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.channel = action.payload;
      })
      .addCase(getChannelDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setSearchTerm } = homePageVideosSlice.actions;

export default homePageVideosSlice.reducer;
