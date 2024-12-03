import { createAsyncThunk } from "@reduxjs/toolkit";
import { request } from "../../../utils/api";

export const getHomePageVideos = createAsyncThunk(
  "youtubeClone/homePageVideos",
  async (_, { rejectWithValue }) => {
    try {
      const response = await request.get("/search", {
        params: {
          part: "snippet",
          maxResults: 20,
          q: "react projects",
          type: "video",
        },
      });
      console.log(response.data);
      return response.data.items;
    } catch (error) {
      return rejectWithValue("Failed to fetch videos");
    }
  }
);
