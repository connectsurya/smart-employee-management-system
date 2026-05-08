import axios from "axios";

const BASE_URL = "http://localhost:8081/api/attendance";

export const getAttendance = () => {
  return axios.get(BASE_URL);
};

export const addAttendance = (data) => {
  return axios.post(BASE_URL, data);
};
