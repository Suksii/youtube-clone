import axios from "axios";

const API_KEY = import.meta.env.VITE_REACT_APP_YOUTUBE_API_KEY;

export const request = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    key: API_KEY,
  },
});

// export const request = axios.create({
//   baseURL: "https://yt-api.p.rapidapi.com/",
//   headers: {
//     ["x-rapidapi-key"]: "65ef94e7cemsh2b6fd81bc5acfaep125f0fjsn3c47329afe29",
//     ["x-rapidapi-host"]: "yt-api.p.rapidapi.com",
//   },
// });
