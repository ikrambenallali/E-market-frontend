import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000'
});
// Un intercepteur = une fonction qui s’exécute avant que la requête ne parte au backend
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
