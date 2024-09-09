// main.js

import { checkWeather } from './counter.js'; // Adjust the import path as needed

const apiKey = import.meta.env.VITE_API_KEY;
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function handleWeatherSearch() {
  const city = searchBox.value;
  await checkWeather(city, apiUrl, apiKey, weatherIcon);
}

searchBtn.addEventListener("click", handleWeatherSearch);
