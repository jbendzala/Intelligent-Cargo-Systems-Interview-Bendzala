import axios from "axios";
import { useQuery } from "react-query";

const useAxiosInstance = () => {
  const apiClient = axios.create({
    baseURL: "/",
  });

  return apiClient;
};

export const useGetShipInfo = () => {
  const apiClient = useAxiosInstance();

  return useQuery("getShipInfo" as const, () =>
    apiClient.get(`/1nWgEE`, { withCredentials: false })
  );
};
