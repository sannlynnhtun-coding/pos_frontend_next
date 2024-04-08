import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://127.0.0.1:3000/api/v1",
    timeout: 10000,
});

export default axiosInstance;
