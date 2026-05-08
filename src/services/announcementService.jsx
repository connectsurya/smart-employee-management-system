import axios from "axios";

const BASE_URL = "http://localhost:8081/api/announcements";

export const getAnnouncements = () => {
  return axios.get(BASE_URL);
};

export const getAnnouncementById = (id) => {
  return axios.get(`${BASE_URL}/${id}`);
};

export const addAnnouncement = (data) => {
  return axios.post(BASE_URL, data);
};

export const updateAnnouncement = (id, data) => {
  return axios.put(`${BASE_URL}/${id}`, data);
};

export const deleteAnnouncement = (id) => {
  return axios.delete(`${BASE_URL}/${id}`);
};
