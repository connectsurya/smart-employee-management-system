import axios from "axios";

const BASE_URL = "http://localhost:8081/api";

export const loginUser = (data) => {
  return axios.post(`${BASE_URL}/employees/login`, data);
};

export const registerUser = (data) => {
  return axios.post(`${BASE_URL}/employees/register`, data);
};

export const getDepartments = () => {
  return axios.get(`${BASE_URL}/departments`);
};
