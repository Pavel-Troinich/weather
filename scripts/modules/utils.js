import { months, weekdays } from "./constants.js"

export const getCurrentDateTime = () => {
  const date = new Date();
  const dayOfWeek = weekdays[date.getDay()];
  const dayOfMonth = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  let hours = date.getHours();
  let minutes = date.getMinutes();

  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return { dayOfWeek, dayOfMonth, month, year, hours, minutes }
}

export const сalculateDewPoint = (temperature, humidity) => {
  return ((temperature - 273.15) - ((1 - (humidity / 100)) / 0.05)).toFixed(1);
}