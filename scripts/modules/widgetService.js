import { fetchWeather } from "./APIService.js";
import { renderWidgetForecast, renderWidgetOther, renderWidgetToday } from "./render.js";

export const startWidget = async () => {
  const widget = document.createElement('div');
  widget.classList.add('widget');

  const dataWeather = await fetchWeather('Минск');

  if (dataWeather.success) {
    console.log(dataWeather.data);
    renderWidgetToday(widget, dataWeather.data);
    renderWidgetOther(widget, dataWeather.data);
  } else {
    showError(widget)
  }

  renderWidgetForecast(widget);
  return widget;
}