import { checkResponse } from "./constants.js";

const latitude = 33.629247;
const longitude = -112.368143;
const API_KEY = "a4f94e56ed032d91f516a92bc70cad2d";

export const getWeather = () => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${API_KEY}`,
  ).then(checkResponse);
};

export const filterWeatherData = (data) => {
  const tempF = Math.round(data.main.temp);
  const tempC = Math.round(((tempF - 32) * 5) / 9);

  return {
    city: data.name,
    temp: {
      F: tempF,
      C: tempC,
    },
    humidity: data.main.humidity,
  };
};
