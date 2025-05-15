import axios from "axios";

// Backend API Base URL
const API_BASE_URL =import.meta.env.VITE_BACKEND_PORT; // Change to your backend URL
console.log(API_BASE_URL);

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance
