// src/api/axios.ts
import axios from "axios";

const api = axios.create({
  baseURL: "https://vle-mbkp.onrender.com/api/v1/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
