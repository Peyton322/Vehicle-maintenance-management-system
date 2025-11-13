import axios from 'axios';
import { message } from 'antd';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  }
});

// 請求攔截器
axiosInstance.interceptors.request.use(
  config => {
    console.log('發送請求:', config.url);
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 回應攔截器
axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response?.status === 500) {
      message.error('模型執行錯誤');
    } else if (error.response?.status === 400) {
      message.error('輸入資料格式錯誤');
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
