import { API_KEY, API_URL } from "./constants.js";

export const fetchWeather = async (city) => {
  try {
    const response = await fetch(`${API_URL}weather?q=${city}&appid=${API_KEY}&lang=ru`);
    const data = await response.json();
    return {success: true, data};
  } catch (error) {
    return {success: false, error}
  }  
}