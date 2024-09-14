// apiRequest.js

import { axiosInstance } from "../Api/AxiosInstance";

export const apiRequest = async (url, data) => {
  try {
    const response = await axiosInstance.post(url, data);

    // Check if the response is successful (status in 2xx range)
    if (response.status >= 200 && response.status < 300) {
      return {
        success: true,
        data: response.data,
      };
    } else {
      return {
        success: false,
        message: 'Request failed. Please try again.',
      };
    }
  } catch (error) {
    // Handle different types of errors
    if (error.response) {
      return {
        success: false,
        message: error.response.data.message || 'Request failed.',
      };
    } else if (error.request) {
      return {
        success: false,
        message: 'No response from the server. Please try again later.',
      };
    } else {
      return {
        success: false,
        message: 'An error occurred. Please try again.',
      };
    }
  }
};
