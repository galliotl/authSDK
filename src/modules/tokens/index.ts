import { deleteCookie, getCookie, setCookie } from "../../utils/cookies";

/* ACCESS TOKEN */
let accessToken = "";
export const getAccessToken = (): string => accessToken;
export const setAccessToken = (at: string): void => {
  accessToken = at;
};
export const deleteAccessToken = () => setAccessToken("");

/* REFRESH TOKEN */
const REFRESH_TOKEN_KEY = "art";
export const getRefreshToken = () => getCookie(REFRESH_TOKEN_KEY);
export const setRefreshToken = (token: string) => {
  setCookie(REFRESH_TOKEN_KEY, token);
};
export const deleteRefreshToken = () => deleteCookie(REFRESH_TOKEN_KEY);
