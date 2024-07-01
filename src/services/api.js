import axios from 'axios';
import { getAccessToken } from './auth';

const API_URL = 'http://localhost:8000/api/accounts/'; // Replace with your Django API base URL

const api = axios.create({
  baseURL: API_URL,
});

// Add a request interceptor to attach the access token to headers
api.interceptors.request.use(
    (config) => {
      const token = getAccessToken();
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

export const registerUser = (userData) => api.post('register/', userData);
export const verifyOtp = (otpData) => api.post('verify_otp/', otpData);
export const generateOtp = (data) => api.post('generate_otp/', data);
export const loginUser = (credentials) => api.post('login/', credentials);
export const refreshToken = (token) => api.post('login/refresh/', { refresh: token });
export const logoutUser = () => api.post('logout/');
export const forgotPassword = (email) => api.post('forgot_password/', { email });
export const confirmForgotPassword = (token, password) => api.post(`forgot_password_confirm/${token}/`, { password });
