import { fetchForecast, fetchWeather, getCity } from "./APIService.js";
import { CITY } from "./constants.js";
import { renderWidgetForecast, renderWidgetOther, renderWidgetToday } from "./render.js";


export const startWidget = async () => {
  const сity = localStorage.city || await getCity() || CITY;
  const widget = document.createElement('div');
  widget.classList.add('widget');

  const dataWeather = await fetchWeather(сity);

  if (dataWeather.success) {
    renderWidgetToday(widget, dataWeather.data);
    renderWidgetOther(widget, dataWeather.data);
  } else {
    showError(dataWeather.error)
  }

  const dataForecast = await fetchForecast(сity);

  if (dataForecast.success) {
    renderWidgetForecast(widget, dataForecast.data);
  } else {
    showError(dataForecast.error)
  }

  return widget;
}