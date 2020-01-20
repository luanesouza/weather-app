import React, { Component } from 'react';
import { fetchWeather } from '../utils'
import WeatherResults from './WeatherResults'

class WeatherForm extends Component{
  state = {
    userRegionInput: '',
    regionName: '',
    country: '',
    weather: '',
    description: '',
    temp_max: '',
    temp_min: '',
    weatherIcon: '',
    error: ''
  }


  handleChange(event){
    const {name, value} = event.target

    this.setState({
      [name]: value
    });
  }

  async handleSubmit(evt){
    evt.preventDefault()

    const userRegionInput = this.state.userRegionInput

    let response = await fetchWeather(userRegionInput)

    if(response){

      let regionName = response.name;
      let country = response.sys.country;
      let weather = response.weather[0].main;
      let description = response.weather[0].description;
      let temp_max = response.main.temp_max;
      let temp_min = response.main.temp_min;
      let weatherIcon = response.weather[0].icon;

      this.setState({
        userRegionInput: '',
        description: description,
        weatherIcon: weatherIcon,
        regionName: regionName,
        country: country,
        weather: weather,
        temp_max: temp_max,
        temp_min: temp_min,
        error: ''
      })
      
    } else {
      this.setState({
        error: 'Region Not Found. Please Check Your Input'
      })
    }
  }

  render(){
    const {
      userRegionInput,
      regionName,
      country,
      weather,
      description,
      temp_max,
      temp_min,
      weatherIcon,
      error } = this.state

    return(
      <section>
        <p>Enter your city or state</p>

        <form onSubmit={(evt) => this.handleSubmit(evt)}>
          <input
            type='text'
            name='userRegionInput'
            value={userRegionInput}
            onChange={(event) =>
              this.handleChange(event)}
            placeholder='Enter Here'
            autoComplete='off'/>
        </form>
        {
        weather || error
          ?
        <WeatherResults
          name={regionName}
          country={country}
          weather={weather}
          description={description}
          weatherIcon={weatherIcon}
          temp_max={temp_max}
          temp_min={temp_min}
          error={error}/>
        :
        null}
      </section>
    )
  }
}
export default WeatherForm;
