// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { request } from "../../../utils/api";

// type CategoryProps = {
//   searchTerm: string;
//   nextPageToken?: string;
// };

// export const getCategories = createAsyncThunk(
//   "homePage/getCategories",
//   async ({ searchTerm, nextPageToken }: CategoryProps, { rejectWithValue }) => {
//     try {
//       const { data } = await request.get("/search", {
//         params: {
//           part: "snippet",
//           maxResults: 20,
//           q: searchTerm,
//           type: "video",
//           pageToken: nextPageToken,
//         },
//       });
//       return {
//         items: data.items.map((video: any) => ({
//           ...video,
//           category: searchTerm === "All" ? "All" : searchTerm,
//         })),
//         nextPageToken: data.nextPageToken,
//       };
//     } catch (error) {
//       return rejectWithValue("Failed to fetch categories");
//     }
//   }
// );
