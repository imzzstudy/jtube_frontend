import axios, { AxiosInstance } from "axios";
import { setInterceptors } from "./common/interceptors";

const API_BASE_URL = "http://localhost:80";
const constructFullURL = (urlPrefix?: string): string => {
  return urlPrefix ? `${API_BASE_URL}/${urlPrefix}` : API_BASE_URL;
};
//axios인스턴스 - 기본 설정. 반복적인 설정을 줄여줌
const createAxiosInstance = (urlPrefix?: string): AxiosInstance => {
  const baseURL = constructFullURL(urlPrefix);
  return axios.create({
    baseURL,
    // timeout: 1000, 요청의 최대 대기 시간을 정의 1초동안 응답이 오지 않으면 요청이 취소.
    // headers: {
    // 'Authorization': 'Bearer your_access_token',
    // 'Content-Type': 'application/json',
    // } 요청에 포함되는 헤더를 정의
  });
};

const createAuthAxiosInstance = (urlPrefix?: string): AxiosInstance => {
  const baseURL = constructFullURL(urlPrefix);
  const instance = axios.create({
    baseURL,
  });
  return setInterceptors(instance);
};

export const apiInstance = createAxiosInstance();
export const userApi = createAuthAxiosInstance("user");
export const authApi = createAuthAxiosInstance("auth");
