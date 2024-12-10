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
        error?.response?.data?.message ||
          error?.message ||
          "Failed to fetch videos"
      );
    }
  }
);

export const getVideoById = createAsyncThunk(
  "youtubeClone/videoById",
  async (id: string, { rejectWithValue }) => {
    try {
      const { data } = await request.get("/videos", {
        params: {
          part: "snippet, statistics",
          id: id,
        },
      });
      console.log(data.items[0]);

      return data.items[0];
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

export const getChannelDetails = createAsyncThunk(
  "youtubeClone/channelDetails",
  async (id: string, { rejectWithValue }) => {
    try {
      const { data } = await request.get("/channels", {
        params: {
          part: "snippet, statistics, contentDetails",
          id: id,
        },
      });
      console.log(data.items[0]);

      return data.items[0];
    } catch (error: any) {
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

export const getComments = createAsyncThunk(
  "youtubeClone/comments",
  async (id: string, { rejectWithValue }) => {
    try {
      const { data } = await request.get("/commentThreads", {
        params: {
          part: "snippet",
          videoId: id,
        },
      });
      return data.items[0];
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
