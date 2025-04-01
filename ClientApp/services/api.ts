import axios from 'axios';

// Create an axios instance with default config
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Define your API methods
export const todoApi = {
  getAll: () => api.get('/todo'),
  getById: (id: number) => api.get(`/todo/${id}`),
  create: (todo: { title: string; isCompleted: boolean }) => api.post('/todo', todo),
  update: (id: number, todo: { title: string; isCompleted: boolean }) => api.put(`/todo/${id}`, todo),
  delete: (id: number) => api.delete(`/todo/${id}`)
};