import axios from "axios";

export const apiRoute = axios.create({
  baseURL: "http://localhost:3000/",
});

export default apiRoute;
