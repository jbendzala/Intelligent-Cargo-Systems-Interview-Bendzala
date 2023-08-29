import axios from "axios";
import { useQuery } from "react-query";

const GET_SHIP_INFO = "getShipInfo" as const;

const useAxiosInstance = () => {
  const apiClient = axios.create({
    baseURL: "/",
  });

  return apiClient;
};

export const useGetShipInfo = () => {
  const apiClient = useAxiosInstance();

  return useQuery(GET_SHIP_INFO, () => apiClient.get(`/1nWgEE`));
};
