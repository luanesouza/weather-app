const axios = require('axios')

const BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast?'
const url_to_share = 'https://openweathermap.org/city/'

const fetchWeather = async regionName => {
  try {
    const response = await axios.get(`${BASE_URL}q=${regionName}&units=imperial,us&&cnt=5&APPID=${process.env.REACT_APP_API_KEY}`);
    let region_id = response.data.city.id
    const data = {response: response.data, url: url_to_share+region_id}
    return data;

  } catch(e) {
    console.error(e.message);
  }
};

// fetchWeather('Brooklyn')
export { fetchWeather }
