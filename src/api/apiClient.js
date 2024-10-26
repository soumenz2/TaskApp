
import axios from 'axios';
import API_BASE_URL from '../config/config';
import { setToken } from '../redux/userReducer';
import { useDispatch } from 'react-redux';


const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL, 
  headers: {
    'Content-Type': 'application/json',
  },
});

// Signup request
export const signup = async (userData) => {
  try {
    console.log("data1",API_BASE_URL)
    console.log("data2",process.env.REACT_APP_API_BASE_URL)
    const response = await apiClient.post('/signup', userData);
    return response.data; 
  } catch (error) {
    console.error('Signup Error:', {
        message: error.message,
        status: error.response?.status,
        data: error.response?.data,
      });
      return error.response?.data || { msg: 'An error occurred during signup' };
  }
};

// Login request
export const login = async (credentials) => {
    
  try {
    const response = await apiClient.post('/login', credentials);
    return response.data; 
   
  } catch (error) {
    return error.response?.data || { msg: 'An error occurred during login' };
  }
};
