import { GET_GISTS_START, GET_GISTS_SUCCESS, GET_GISTS_ERROR } from "./types";

export const getGistsStart = () => ({
  type: GET_GISTS_START,
});

export const getGistsSucess = (gists) => ({
  type: GET_GISTS_SUCCESS,
  payload: gists,
});

export const getGistsError = (e) => ({
  type: GET_GISTS_ERROR,
  payload: e,
});
