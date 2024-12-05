import { createAsyncThunk } from "@reduxjs/toolkit";
import { request } from "../../../utils/api";

export const getHomePageVideos = createAsyncThunk(
  "youtubeClone/homePageVideos",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await request.get("/videos", {
        params: {
          part: "snippet, contentDetails, statistics",
          maxResults: 20,
          chart: "mostPopular",
          type: "video",
        },
      });
      console.log(data);
      return data.items;
    } catch (error) {
      return rejectWithValue("Failed to fetch videos");
    }
  }
);
