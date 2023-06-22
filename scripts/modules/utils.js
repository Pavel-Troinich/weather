import { months, weekdays, weekdaysShort } from "./constants.js"

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
};

export const сalculateDewPoint = (temperature, humidity) => {
  return ((temperature - 273.15) - ((1 - (humidity / 100)) / 0.05)).toFixed(1);
}

export const getWindDirection = (deg) => {
  if (deg >= 0 && deg <= 22 || deg >= 338) return 'c';
  if (deg > 22 && deg <= 67) return 'с-в';
  if (deg > 67 && deg <= 112) return 'в';
  if (deg > 112 && deg <= 157) return 'ю-в';
  if (deg > 157 && deg <= 202) return 'ю';
  if (deg > 202 && deg <= 247) return 'ю-з';
  if (deg > 247 && deg <= 292) return 'з';
  if (deg > 292 && deg <= 337) return 'с-з';
};

export const getWeatherForecastData = (data) => {
  const forecast = data.list.filter(
    (item) =>
    new Date(item.dt_txt).getHours() === 12 && 
    new Date(item.dt_txt).getDate() >= new Date().getDate()
  );

  const forecastData = forecast.map((item) => {
    const date = new Date(item.dt_txt);
    const dayOfWeek = weekdaysShort[date.getDay()];
    const weatherIcon = item.weather[0].icon;

    let tempArr = [];

    for (let i = 0; i < data.list.length; i++) {
      const temp = data.list[i].main.temp;
      const tempDate = new Date(data.list[i].dt_txt);
      
      if (tempDate.getDate() === date.getDate()) {
        tempArr.push(temp);
      }
    }
    const minTemp = Math.min.apply(null, tempArr);
    const maxTemp = Math.max.apply(null, tempArr);

    return {
      dayOfWeek,
      weatherIcon,
      minTemp,
      maxTemp,
    };
  });
  
  return forecastData;
}