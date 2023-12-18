import axios from "axios";

export const httpClient = axios.create({
  baseURL: "http://localhost:3001/",
  timeout: 60000,
});
