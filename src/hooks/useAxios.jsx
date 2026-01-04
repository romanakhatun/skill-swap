import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://skill-swap-server-ashy.vercel.app",
});

const useAxios = () => {
  return axiosInstance;
};

export default useAxios;
