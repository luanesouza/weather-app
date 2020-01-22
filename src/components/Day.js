import React from 'react'

export default function Day(props) {

  const { temp_min, temp_max, feels_like, weatherInfo } = props;

  return (
    <section>
      <img src={`https://openweathermap.org/img/w/${weatherInfo.icon}.png`} alt='weather-icon' />
      <h4> Feels Like:  {feels_like} </h4>
      <p> Main: {weatherInfo.main} </p>
      <p> {weatherInfo.description} </p>
      <p>Max temperature: {temp_max} </p>
      <p>Min temperature: {temp_min} </p>
    </section>
  )
}
