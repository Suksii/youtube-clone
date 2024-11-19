import axios from "axios";

export const request = axios.create({
  baseURL: "",
  headers: {
    ["x-rapidapi-key"]: "65ef94e7cemsh2b6fd81bc5acfaep125f0fjsn3c47329afe29",
    ["x-rapidapi-host"]: "yt-api.p.rapidapi.com",
  },
});
