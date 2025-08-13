import axios from "axios";

export const axiosApiClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/users",
});
