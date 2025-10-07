import axios from "axios";

const axiosInstance = axios.create({
  baseURL:  process.env.NEXT_PUBLIC_API_BASE_URL, // You can set your API base URL here
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
