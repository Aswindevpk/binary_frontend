import axios from 'axios';
import { toast } from "sonner";

const API_URL = 'http://192.168.1.8:8000/api/'; 

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

const formApi = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "multipart/form-data",
  }
});

const attachTokenToRequest = (config) => {
  const token = localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null;
  if (token) {
    config.headers['Authorization'] = `Bearer ${token.access}`;
  }
  return config;
};

// Request interceptor to attach the access token to headers
api.interceptors.request.use(attachTokenToRequest, (error) => Promise.reject(error));
formApi.interceptors.request.use(attachTokenToRequest, (error) => Promise.reject(error));

//Response interceptor for handling errors
const handleErrorResponse = (error) =>{
  if(error.code === 'ERR_NETWORK'){
    //network error
    console.log("Network error: Unable to connect to the server.")
    toast.error("Something went wrong in the API end.")
  }
  return Promise.reject(error)
}

api.interceptors.response.use(response => response, handleErrorResponse)
formApi.interceptors.response.use(response => response, handleErrorResponse)

export { api, formApi };

