import { createAsyncThunk } from "@reduxjs/toolkit";
import { request } from "../../../utils/api";

export const getHomePageVideos = createAsyncThunk(
  "youtubeClone/homePageVideos",
  async (_, { rejectWithValue }) => {
    try {
      const {
        data: { items },
      } = await request.get("/search", {
        params: {
          part: "snippet",
          maxResults: 20,
          q: "react projects",
          type: "video",
        },
      });
      console.log(items);
      return items;
    } catch (error) {
      return rejectWithValue("Failed to fetch videos");
    }
  }
);
