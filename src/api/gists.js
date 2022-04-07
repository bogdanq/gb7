import { request } from "./request";

export const getPublicGistsApi = (page) => {
  return request.get(`gists/public?page=${page}`);
};

// @TODO сделать санк
export const searchGistsByNameApi = (name = "bogdanq") => {
  return request.get(`/users/${name}/gists`);
};
