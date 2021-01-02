import { post } from "./modules/api";
import {
  deleteAccessToken,
  deleteRefreshToken,
  setAccessToken,
  setRefreshToken,
} from "./modules/tokens";
import { deleteUid, getProfile } from "./modules/user";
import { LoginStatus } from "./types";

/* TODO GOOGLE, FACEBOOK etc. */

/* USING OUR API */
export const getLoginStatus = async (): Promise<LoginStatus> => {
  try {
    const profile = await getProfile();
    return {
      isLoggedIn: true,
      uid: profile.uid,
    };
  } catch {
    return {
      isLoggedIn: false,
    };
  }
};

export const loginWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<boolean> => {
  try {
    const { access, refresh } = (
      await post("LOGIN_PATH", { email, password })
    ).data;
    setAccessToken(access);
    setRefreshToken(refresh);
    return true;
  } catch (err) {
    return false;
  }
};

export const signout = () => {
  deleteRefreshToken();
  deleteAccessToken();
  deleteUid();
};
