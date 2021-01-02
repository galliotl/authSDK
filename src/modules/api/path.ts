// DEFAULT PATHS
const V1_PATH = "/v1";
const AUTH_PATH = `${V1_PATH}/auth`;
const PROFILE_PATH = `${V1_PATH}/profile`;

// ENDPOINTS
export const EXISTS_PATH = `${AUTH_PATH}/exists`;
export const LOGIN_PATH = `${AUTH_PATH}/login`;
export const REFRESH_PATH = `${AUTH_PATH}/refresh`;
export const REG_PATH = `${AUTH_PATH}/register`;
export const ME_PATH = `${PROFILE_PATH}/me`;
