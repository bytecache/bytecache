import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';

async function http<T>(config: AxiosRequestConfig): Promise<Res<T>> {
  const instance = axios.create({
    baseURL: 'https://api.zzfzzf.com',
    timeout: 10000,
    headers: { 'Content-Type': 'application/json;charset=UTF-8' },
    validateStatus: function () {
      return true;
    },
  });
  instance.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );
  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    },
  );
  const { data } = await instance.request<Res<T>>(config);
  return data;
}

export default http;
