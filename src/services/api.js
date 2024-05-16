import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://66435fd76c6a65658706d34f.mockapi.io/events',
});

export const setToken = token => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};