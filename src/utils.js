const axios = require('axios')

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?'
console.log(process.env.REACT_APP_API_KEY)

const fetchWeather = async regionName => {
  try {
    const response = await axios.get(`${BASE_URL}q=${regionName}&units=imperial,us&APPID=${process.env.REACT_APP_API_KEY}`);
    return response.data;

  } catch(e) {
    console.error(e.message);
  }
};


export { fetchWeather }
