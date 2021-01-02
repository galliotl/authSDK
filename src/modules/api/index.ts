import axios, { AxiosResponse } from "axios";
import { API_URL } from "../../config";
import { ApiError, LoginRequiredError } from "./errors";
import { getAccessToken, getRefreshToken, setAccessToken } from "../tokens";
import { isAxiosError, Paths } from "./types";
import * as paths from "./path";

const buildDefaultHeaders = (headers?: Record<string, unknown>) => ({
  Authorisation: `token ${getAccessToken()}`,
  ...headers,
});

const refreshAccessToken = async () => {
  const token = getRefreshToken();
  if (!token) {
    throw new LoginRequiredError();
  }
  const { access } = (await get("REFRESH_PATH")).data;
  setAccessToken(access);
};

export const get = async (
  path: Paths,
  headers?: Record<string, unknown>
): Promise<AxiosResponse> => {
  try {
    return await axios.get(`${API_URL}${paths[path]}`, {
      headers: buildDefaultHeaders(headers),
    });
  } catch (err) {
    const error = new ApiError({ message: "unknown" });
    if (isAxiosError(err) && err.response?.data) {
      error.apiResponse = err.response.data;
    }
    throw error;
  }
};

export const authedGet = async (
  path: Paths,
  headers?: Record<string, unknown>
): Promise<AxiosResponse> => {
  if (!getAccessToken()) await refreshAccessToken();
  return get(path, headers);
};

export const post = async (
  path: Paths,
  data: Record<string, unknown>,
  headers?: Record<string, unknown>
): Promise<AxiosResponse> => {
  try {
    return await axios.post(`${API_URL}${paths[path]}`, data, {
      headers: buildDefaultHeaders(headers),
    });
  } catch (err) {
    const error = new ApiError({ message: "unknown" });
    if (isAxiosError(err) && err.response?.data) {
      error.apiResponse = err.response.data;
    }
    throw error;
  }
};

export const authedPost = async (
  path: Paths,
  data: Record<string, unknown>,
  headers?: Record<string, unknown>
) => {
  if (!getAccessToken()) await refreshAccessToken();
  return post(path, data, headers);
};
