import axios from "axios";
import { BASE_URL } from "./constant.js";

export const handlePostOperation = async (url, data) => {
  try {
    const result = await axios.post(`${BASE_URL}${url}`, data, {
      withCredentials: true,
    });
    return result;
  } catch (error) {
    return error;
  }
};
