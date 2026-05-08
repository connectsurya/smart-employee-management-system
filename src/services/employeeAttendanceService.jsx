import axios from "axios";

const BASE_URL = "http://localhost:8081/api/attendance";

export const clockIn = async (userId) => {
  return await axios.post(`${BASE_URL}/clock-in/${userId}`);
};

export const clockOut = async (attendanceId) => {
  return await axios.put(`${BASE_URL}/clock-out/${attendanceId}`);
};

export const getAttendance = async (userId) => {
  return await axios.get(`${BASE_URL}/${userId}`);
};
