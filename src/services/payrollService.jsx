import axios from "axios";

const BASE_URL = "http://localhost:8081/api/payroll";

export const getPayrolls = () => {
  return axios.get(BASE_URL);
};

export const createPayroll = (data) => {
  return axios.post(BASE_URL, data);
};

export const getPayslips = async (empId) => {
  return await axios.get(`${BASE_URL}/${empId}`);
};

export const updatePayrollStatus = async (id) => {
  return await axios.put(`${BASE_URL}/pay/${id}`);
};
