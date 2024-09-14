import axios from 'axios';
import { useLocal } from '../CustomHook/useLocal';

// Axios instance
export const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api', // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Logout function
const logout = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
  window.location.href = '/login'; // Redirect to login page
};

// Axios response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response; // Return response if everything is fine
  },
  async (error) => {
    const originalRequest = error.config;

    // Check if the error is 401 (Unauthorized) and it's not a retry request
    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // Prevent infinite retry loops

      try {
        const refreshToken = localStorage.getItem('refreshToken');

        // If no refresh token, logout the user
        if (!refreshToken) {
          // logout();
          return Promise.reject(error);
        }

        // Attempt to refresh the access token
        const { data } = await axiosInstance.post('/refresh', {
          token: refreshToken, // Pass the refresh token to the backend
        });

        // Store the new access token
        localStorage.setItem('accessToken', data.accessToken);

        // Update the original request and retry it with the new access token
        axiosInstance.defaults.headers['Authorization'] = `Bearer ${data.accessToken}`;
        originalRequest.headers['Authorization'] = `Bearer ${data.accessToken}`;

        // Retry the original request with the new access token
        return axiosInstance(originalRequest);
      } catch (err) {
        console.error('Refresh token failed:', err);
        logout(); // If refresh fails, log the user out
        return Promise.reject(err);
      }
    }

    // If any other error, reject the promise
    return Promise.reject(error);
  }
);
