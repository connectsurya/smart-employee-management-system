import axios from "axios";

const BASE_URL = "http://localhost:8081/api/employees";

export const getEmployees = () => {
  return axios.get(BASE_URL);
};

export const addEmployee = (data) => {
  return axios.post(BASE_URL, data);
};

export const getEmployeeById = (id) => {
  debugger
  return axios.get(`${BASE_URL}/${id}`);
};

export const updateEmployee = (id, data) => {
  return axios.put(`${BASE_URL}/${id}`, data);
};

export const deleteEmployee = (id) => {
  return axios.delete(`${BASE_URL}/${id}`);
};