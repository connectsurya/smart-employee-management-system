import axios from "axios";

const BASE_URL = "http://localhost:8081/api/departments";

export const getDepartments = () => axios.get(BASE_URL);

export const addDepartment = (data) => axios.post(BASE_URL, data);

export const updateDepartment = (id, data) => {
  return axios.put(`${BASE_URL}/${id}`, data);
};

export const deleteDepartment = (id) => {
  return axios.delete(`${BASE_URL}/${id}`);
};

export const getDepartmentById = (id) => {
  return axios.get(`${BASE_URL}/${id}`);
};
