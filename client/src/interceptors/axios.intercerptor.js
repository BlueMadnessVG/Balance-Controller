import { apiRoute } from "../services/api.config";
import { getValidationError } from "../utils/get-validation-error-js";
import { SnackbarUtilities } from "../utils/snackbar-manager";

export const AxiosInterceptor = () => {
  const updateHeader = (request) => {
    const token = "9817239172"; // localStorage.getItem("token");
    const newHeaders = {
      Authorization: token,
      "Content-Type": "application/json",
      "Access-Controller-Allow-Origin": "*",
    };

    request.headers = newHeaders;
    return request;
  };

  apiRoute.interceptors.request.use((request) => {
    console.log("Starting Request", request);
    return updateHeader(request);
  });

  apiRoute.interceptors.response.use(
    (response) => {
      console.log("Request Response", response);
      return response;
    },
    (error) => {
      console.log("Request Error", error);
      SnackbarUtilities.error(getValidationError(error.code));
      return Promise.reject(error);
    }
  );
};
