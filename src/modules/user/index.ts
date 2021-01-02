import { authedGet } from "../api";
import { Profile } from "./types";

let uid = "";

export const getUid = () => uid;
export const setUid = (uid: string) => {
  uid = uid;
};
export const deleteUid = () => setUid("");

export const getProfile = async (): Promise<Profile> => {
  const profile = (await authedGet("ME_PATH")).data;
  return profile;
};
