import React from 'react';

export default function WeatherResults(props){

  const {
    name,
    country,
    weather,
    description,
    temp_max,
    temp_min,
    weatherIcon,
    error } = props;


  function kelvinToFahrenheit(temperatureInKelvin){
    let fahrenheitConversion = (temperatureInKelvin - 273.15) * 9/5 + 32;
    //removing the numbers after the '.'
    let fahrenheitTemp = fahrenheitConversion.toString().split('.')[0];

    return fahrenheitTemp + ' °F';
  }

  let temperatureMax = kelvinToFahrenheit(temp_max)
  let temperatureMin = kelvinToFahrenheit(temp_min)

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
          <p>Max Temperature: { temperatureMax } </p>
          <p>Min Temperature: { temperatureMin } </p>
        </section>
      }
    </section>

  )
}
