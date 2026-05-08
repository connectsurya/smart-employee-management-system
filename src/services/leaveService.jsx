import axios from "axios";

const BASE_URL = "http://localhost:8081/api/leaves";

export const applyLeave = async (leaveData) => {
  return await axios.post(BASE_URL, leaveData);
};

export const getLeaveHistory = async (userId) => {
  return await axios.get(`${BASE_URL}/${userId}`);
};

export const getAllLeaves = async () => {
  return await axios.get(BASE_URL);
};

export const approveLeave = async (id) => {
  return await axios.put(`${BASE_URL}/approve/${id}`);
};

export const rejectLeave = async (id) => {
  return await axios.put(`${BASE_URL}/reject/${id}`);
};

export const deleteLeave = async (id) => {
  return await axios.delete(`${BASE_URL}/${id}`);
};
