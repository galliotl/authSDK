import { AxiosError } from "axios";
import * as paths from "./path";

export type Paths = keyof typeof paths;

export type ApiErrorResponse = {
  message: string;
  payload?: Record<string, unknown>;
};

/** Type Guards */
export const isAxiosError = (err: any): err is AxiosError => {
  return typeof err === "object" && err.isAxiosError === true;
};
