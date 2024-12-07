import { createAsyncThunk } from "@reduxjs/toolkit";
import { request } from "../../../utils/api";
import { RootState } from "../store";

export const getHomePageVideos = createAsyncThunk(
  "youtubeClone/homePageVideos",
  async (pageToken: string | null | undefined = null, { rejectWithValue }) => {
    try {
      const { data } = await request.get("/videos", {
        params: {
          part: "snippet, contentDetails, statistics",
          maxResults: 20,
          pageToken,
          chart: "mostPopular",
          type: "video",
        },
      });
      return data;
    } catch (error) {
      return rejectWithValue("Failed to fetch videos");
    }
  }
);

export const getVideosByCategory = createAsyncThunk(
  "youtubeClone/videosByCategory",
  async (searchTerm: string, { rejectWithValue, getState }) => {
    try {
      const state = getState() as RootState;
      const nextPageToken = state.homePageVideosSlice.nextPageToken;
      const { data } = await request.get("/search", {
        params: {
          part: "snippet",
          maxResults: 20,
          q: searchTerm,
          pageToken: nextPageToken || undefined,
          type: "video",
        },
      });
      return {
        items: data.items,
        nextPageToken: data.nextPageToken,
        searchTerm,
      };
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message || error?.message || "Failed to fetch videos"
      );
    }
  }
);
