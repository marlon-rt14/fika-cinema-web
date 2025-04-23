import axios from "axios";

export const baseUrl = "/db";

export const fakeApi = axios.create({
  baseURL: baseUrl,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
