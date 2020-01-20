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

  //removing the numbers after the '.'
  let temperatureMax = temp_max.toString().split('.')
  let temperatureMin = temp_min.toString().split('.')

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
          <p>Max Temperature: {temperatureMax[0]} °F</p>
          <p>Min Temperature: {temperatureMin[0]} °F</p>
        </section>
      }
    </section>

  )
}
