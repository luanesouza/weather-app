const axios = require('axios')

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?'
const API_KEY = 'd29e9cce44012ae03806fcd9edc39a4e';

const fetchWeather = async regionName => {
  // TODO: fetch weather forecast from endpoint
  // from https://openweathermap.org/api
  try {
    const response = await axios.get(`${BASE_URL}q=${regionName}&units=imperial,us&APPID=${API_KEY}`);
    return response.data;
  } catch(e) {
    console.error(e.message);
  }
};


export { fetchWeather }
