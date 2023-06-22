import { startWidget } from "./modules/widgetService.js";

export let city = 'Минск';
export const changeCity = () => {
  city = prompt('Введите название города:');
  initWidget(document.querySelector('#app'));
}

const initWidget = async (app) => {
  const widget = await startWidget();
  app.innerHTML = '';
  app.append(widget);

  const changeCityButton = document.querySelector('.widget__change-city');
  changeCityButton.addEventListener('click', changeCity);
}

initWidget(document.querySelector('#app'));