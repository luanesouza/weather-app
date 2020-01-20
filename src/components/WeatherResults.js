import React from 'react';

export default function WeatherResults(props){

  const {
    name,
    country,
    weather,
    description,
    temp_max,
    temp_min,
    weatherIcon } = props;

  //removing the numbers after the '.'
  let temperatureMax = temp_max.toString().split('.')
  let temperatureMin = temp_min.toString().split('.')

  return(

    <section id='weather-results'>
      <h3>{name}, {country}</h3>
      <h3>Weather: {weather}</h3>

      <img src={`https://openweathermap.org/img/w/${weatherIcon}.png`} alt='weather-icon'/>
      <p>{description.toUpperCase()}</p>
      <h3>Max Temperature: {temperatureMax[0]} °F</h3>
      <h3>Min Temperature: {temperatureMin[0]} °F</h3>
    </section>

  )
}
