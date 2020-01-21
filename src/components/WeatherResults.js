import React, {useState} from 'react';

export default function WeatherResults(props){
  const [temperatureChosen, setTemperatureUnit] = useState(false);

  const {
    name,
    country,
    weather,
    description,
    temp_max,
    temp_min,
    weatherIcon,
    error } = props;


    function temperatureUnit(temperature){
      if(temperatureChosen) {
        let celsius = kelvinToCelsius(temperature)
        return celsius;
      } else {
        let fahrenheit = kelvinToFahrenheit(temperature)
        return fahrenheit;
      }
    }


  function kelvinToFahrenheit(temperatureInKelvin){
    // function converts kelvin to fahrenheit
    let fahrenheitConversion = (temperatureInKelvin - 273.15) * 9/5 + 32;
    //removing the numbers after the '.'
    let fahrenheitTemp = fahrenheitConversion.toString().split('.')[0];

    return fahrenheitTemp + ' °F';
  }

  let temperatureMax = temperatureUnit(temp_max)
  let temperatureMin = temperatureUnit(temp_min)

  function kelvinToCelsius(temperatureInKelvin){
    // function converts kelvin to celsius
    let celsiusConversion = temperatureInKelvin - 273.15;
    let celsiusTemp = celsiusConversion.toString().split('.')[0];
    return celsiusTemp + ' °C';

  }

  // If the user misppells the name of city or state, the app will not break, instead, it will display an error message
  return(

    <section id='weather-results'>
      { error
        ?
        <p>{error}</p>
        :
        <section>
          <p>{name}, {country}</p>
          <p>Weather: {weather}</p>

          <img src={`https://openweathermap.org/img/w/${weatherIcon}.png`} alt='weather-icon'/>
          <p>{description.toUpperCase()}</p>
          <button onClick={() => setTemperatureUnit(!temperatureChosen)}> Change Temperature Unit </button>
          <p>Max Temperature: { temperatureMax } </p>
          <p>Min Temperature: { temperatureMin } </p>
        </section>
      }
    </section>

  )
}
