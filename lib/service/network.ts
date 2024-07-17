import axios from "axios";

const api = axios.create({
  baseURL: `https://api.themoviedb.org/3/movie`,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
  },
  //   params: {
  //     api_key: process.env.NEXT_PUBLIC_API_KEY,
  //   },
});

export { api };
