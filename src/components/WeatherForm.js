import React, { Component } from 'react';
import { fetchWeather } from '../utils'
import WeatherResults from './WeatherResults'

class WeatherForm extends Component{
  state = {
    region: '',
    regionName: '',
    weather: '',
    desc: '',
    temp_max: '',
    temp_min: '',
    humidity: '',
    weatherIcon: ''
  }


  handleChange(event){
    const {name, value} = event.target

    this.setState({
      [name]: value
    });
  }

  async handleSubmit(evt){
    evt.preventDefault()

    const userRegionInput = this.state.region

    let response = await fetchWeather(userRegionInput)

    let regionName = response.name
    let weather = response.weather[0].main;
    let desc = response.weather[0].description;
    let temp_max = response.main.temp_max;
    let temp_min = response.main.temp_min;
    let weatherIcon = response.weather[0].icon;

    this.setState({
      region: '',
      desc: desc,
      weatherIcon: weatherIcon,
      regionName: regionName,
      weather: weather,
      temp_max: temp_max,
      temp_min: temp_min
    })
  }

  render(){
    const { region, regionName, weather, desc, temp_max, temp_min, weatherIcon } = this.state
    return(
      <section>
        Enter your city or state
        <form onSubmit={(evt) => this.handleSubmit(evt)}>
          <input
            type='text'
            name='region'
            value={region}
            onChange={(event) =>
              this.handleChange(event)}
            placeholder='Enter Here'
            autoComplete='off'/>
        </form>
        {
        weather
          ?
        <WeatherResults
          name={regionName}
          weather={weather}
          desc={desc}
          weatherIcon={weatherIcon}
          temp_max={temp_max}
          temp_min={temp_min}/>
        :
        null}
      </section>
    )
  }
}
export default WeatherForm;
