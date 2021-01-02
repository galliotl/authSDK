import { DEFAULT_COOKIE_EXPIRATION_DAYS } from "../../config";

export const setCookie = (
  key: string,
  value: string,
  expiresDay = DEFAULT_COOKIE_EXPIRATION_DAYS
): void => {
  const date = new Date();
  date.setTime(date.getTime() + expiresDay * 24 * 60 * 60 * 1000);
  document.cookie = `${key}=${value}; expires=${date.toUTCString()}`;
};

export const getCookie = (key: string) => {
  const name = key + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookies = decodedCookie.split(";");
  for (const cookie of cookies) {
    cookie.trim();
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return "";
};

export const deleteCookie = (key: string) => {
  document.cookie = `${key}=`;
};
