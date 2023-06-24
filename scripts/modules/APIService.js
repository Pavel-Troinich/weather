import { API_KEY, API_URL, CITY_URL } from "./constants.js";

export const fetchWeather = async (city) => {
  try {
    const response = await fetch(`${API_URL}weather?q=${city}&appid=${API_KEY}&lang=ru`);
    const data = await response.json();
    return {success: true, data};
  } catch (error) {
    return {success: false, error}
  }  
}

export const fetchForecast = async (city) => {
  try {
    const response = await fetch(`${API_URL}forecast?q=${city}&appid=${API_KEY}&lang=ru`);
    const data = await response.json();
    return {success: true, data};
  } catch (error) {
    return {success: false, error}
  }  
}

export const getCity = async () => {
  try {
    const response = await fetch(CITY_URL);

    if (!response.ok) {
      throw new Error('Ошибка определения города!');
    }

    const city = await response.text();
    localStorage.city = city;
    return city;
  } catch (error) {
    console.error(error);
  }
}