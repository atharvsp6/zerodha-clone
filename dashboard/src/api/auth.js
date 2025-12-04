import axios from "axios";

const api = axios.create({
  baseURL: "https://zerodha-backend-ziop.onrender.com/",
});

export function setAuthToken(token) {
  if (token) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common.Authorization;
  }
}

export async function registerUser(values) {
  const response = await api.post("/auth/register", values);
  return response.data;
}

export async function loginUser(values) {
  const response = await api.post("/auth/login", values);
  return response.data;
}

export async function fetchCurrentUser() {
  const response = await api.get("/me");
  return response.data;
}

export default api;
