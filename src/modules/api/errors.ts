import { ApiErrorResponse } from "./types";

export class ApiError extends Error {
  apiResponse: ApiErrorResponse;
  constructor(errorResponse: ApiErrorResponse) {
    super(errorResponse.message);
    this.apiResponse = errorResponse;
  }
}

export class LoginRequiredError extends Error {
  name = "LOGIN_REQUIRED";
  message = "Cannot find auth tokens, you must login";
}
