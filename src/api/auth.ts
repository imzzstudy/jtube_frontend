import { authApi } from "api";

interface userData {
  id: FormDataEntryValue | null;
  pw: FormDataEntryValue | null;
}

/**
 * 회원가입 API 호출
 * @param {UserData} userData 회원가입에 필요한 사용자 데이터
 * @returns {Promise<any>} API 호출 결과 (Promise)
 */
export function joinUser(userData: userData) {
  return authApi.post("join", userData);
}

/**
 * 로그인 API 호출
 * @param {UserData} userData 로그인에 필요한 사용자 데이터
 * @returns {Promise<any>} API 호출 결과 (Promise)
 */
export function loginUser(userData: userData) {
  return authApi.post("login", userData);
}
