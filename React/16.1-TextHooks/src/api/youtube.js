import axios from "axios";

const KEY = "AIzaSyBxPyZoz6r3zYdKzDesilLMybm4dtcOXDc";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube.v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
