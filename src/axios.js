import axios from "axios";

// Base URL to make requests to the movie database
const instance = axios.create({
  baseURL: "https://covid19.mathdro.id/api/",
});

export default instance;
