import { userApi } from "api";

export function fetchUsers() {
  return userApi.get("/imzz");
}
