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
    weatherIcon: '',
    error: '',
    daysList: [],
    url_to_share: '',
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
      let data = response.response
      let URL = response.url
      let regionName = data.city.name;
      let country = data.city.country;
      let daysList = data.list

      // Created function that's responsible for setting state for recentSearches
      this.checkingRecentSearches(regionName, weatherIcon)

      this.setState({
        userRegionInput: '',
        regionName: regionName,
        country: country,
        daysList: daysList,
        url_to_share: URL,
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
    console.log(this.state);
  }

  render(){
    const {
      userRegionInput,
      regionName,
      country,
      daysList,
      url_to_share,
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
        regionName || error
        ?
        <WeatherResults
          name={regionName}
          country={country}
          error={error}
          url_to_share={url_to_share}
          daysList={daysList}/>
        :
        null}
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
