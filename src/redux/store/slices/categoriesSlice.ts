// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { Video } from "../../../types/types";
// import { getCategories } from "../reducers/getCategories";

// type InitialState = {
//   videos: Video[];
//   searchResults: Video[];
//   nextPageToken: string | null;
// };

// const initialState: InitialState = {
//   videos: [],
//   searchResults: [],
//   nextPageToken: null,
// };

// const homePageCategories = createSlice({
//   name: "categories",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(
//       getCategories.fulfilled,
//       (state, action: PayloadAction<Video[]>) => {
//         state.categories = action.payload;
//       }
//     );
//   },
// });

// export default homePageCategories.reducer;
