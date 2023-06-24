import { startWidget } from "./modules/widgetService.js";

const changeCity = () => {
  const city = prompt('Введите название города:');
  localStorage.city = city;
  initWidget(document.querySelector('#app'));
}

const initWidget = async (app) => {
  const widget = await startWidget();
  app.innerHTML = '';
  app.append(widget);

  const changeCityButton = document.querySelector('.widget__change-city');
  changeCityButton.addEventListener('click', changeCity);

  const refreshWeather = document.querySelector('.widget__refresh-img');
  refreshWeather.addEventListener('click', () => initWidget(document.querySelector('#app')));
}

initWidget(document.querySelector('#app'));

setInterval(() => initWidget(document.querySelector('#app')), 1800000);