import React from 'react';

export default function WeatherResults(props){

  const {name, weather, desc, temp_max, temp_min, weatherIcon} = props;

  let temperatureMax = temp_max.toString().split('.')
  let temperatureMin = temp_min.toString().split('.')
  return(

    <section id='weather-results'>
      <h3>{name}, US</h3>
      <h3>Weather: {weather}</h3>
      <img src={`https://openweathermap.org/img/w/${weatherIcon}.png`} alt='weather-icon'/>
        <p>{desc.toUpperCase()}</p>
      <h3>Max Temperature: {temperatureMax[0]} °F</h3>
      <h3>Min Temperature: {temperatureMin[0]} °F</h3>
    </section>
    
  )
}
