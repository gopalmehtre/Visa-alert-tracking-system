import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/alerts";

export const getAlerts = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const createAlert = async (alert) => {
  const res = await axios.post(API_URL, alert);
  return res.data;
};

export const updateAlert = async (id, updates) => {
  const res = await axios.put(`${API_URL}/${id}`, updates);
  return res.data;
};

export const deleteAlert = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};