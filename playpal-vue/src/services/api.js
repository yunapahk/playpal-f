import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BACKEND_URL || 'https://playpal-976f.onrender.com/';

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
  withCredentials: true,
});

// CRUD API for Dogs
const dogsApi = {
  getAll: () => apiClient.get(`/dogs`),
  getOne: (id) => apiClient.get(`/dogs/${id}`),
  add: (data) => apiClient.post(`/dogs`, data),
  update: (id, data) => apiClient.put(`/dogs/${id}`, data),
  delete: (id) => apiClient.delete(`/dogs/${id}`),
};

// Signup and Login
const authApi = {
  signup: (data) => apiClient.post(`/signup`, data),
  login: (data) => apiClient.post(`/login`, data)
};

const api = {
  // Dogs API
  getDogs: dogsApi.getAll,
  getDog: dogsApi.getOne,
  addDog: dogsApi.add,
  updateDog: dogsApi.update,
  deleteDog: dogsApi.delete,
  
  // Auth API
  signup: authApi.signup,
  login: authApi.login
};

export default api;
