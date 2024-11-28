import apiRoute from "./api.config";

export async function postLogin(params) {
  const result = await apiRoute.post("login", params);
  return result.data;
}

export async function getUser() {
  const result = await apiRoute("user");
  return result.data;
}

export async function putUser(params) {
  const result = await apiRoute.put("user", params);
  return result.data;
}
