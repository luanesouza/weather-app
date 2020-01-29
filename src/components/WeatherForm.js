import React, { Component } from 'react';
import { fetchWeather } from '../utils';
import WeatherResults from './WeatherResults';
import RecentSearches from './RecentSearches';
import Error from './Error';

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
    recentSearches: [],
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
    // If response is true, set information to state.
    // else, display error message to user

    if(response){

      let regionName = response.name;
      let country = response.sys.country;
      let weather = response.weather[0].main;
      let description = response.weather[0].description;
      let temp_max = response.main.temp_max;
      let temp_min = response.main.temp_min;
      let weatherIcon = response.weather[0].icon;

      // Created function that's responsible for setting state for recentSearches
      this.checkingRecentSearches(regionName, weatherIcon)

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
        error: 'Region Not Found. Please Check Your Input',
        weather: ''
      })
    }
  }

  checkingRecentSearches(regionName, weatherIcon){
    const {recentSearches} = this.state;
    let equalToFive = recentSearches.length === 5;

    if(!equalToFive) {
      this.setState({
        recentSearches: [...recentSearches, {regionName: regionName, icon: weatherIcon}],
      })

      localStorage.setItem('recentSearches', JSON.stringify(this.state.recentSearches))
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
      recentSearches,
      error } = this.state

      // Weather results will be displayed if api call is successfull or if there's an error to be displayed
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
            <input type='submit' value='Search'/>
        </form>

        {
          JSON.parse(localStorage.getItem('recentSearches'))
          ?
          <RecentSearches
            recentSearches={recentSearches}
            />
          :
          null
        }

        {
          weather
          ?
          <>
            <WeatherResults
              name={regionName}
              country={country}
              weather={weather}
              description={description}
              weatherIcon={weatherIcon}
              temp_max={temp_max}
              temp_min={temp_min}
                />
              </>
          :
          <Error error={error}/>
        }
      </section>
    )
  }
}
export default WeatherForm;
