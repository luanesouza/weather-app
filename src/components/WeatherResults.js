import React, {useState} from 'react';
import Day from './Day';

export default function WeatherResults(props){
  const [temperatureChosen, setTemperatureUnit] = useState(false);
  const [wasTextCopied, copyTextToClipboard] = useState('Click to copy');


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


  function kelvinToCelsius(temperatureInKelvin){
    // function converts kelvin to celsius
    let celsiusConversion = temperatureInKelvin - 273.15;
    let celsiusTemp = celsiusConversion.toString().split('.')[0];
    return celsiusTemp + ' °C';
  }


   function shareUrl(){
    let copyText = document.getElementById("sharing-url");
    copyText.select()
    document.execCommand("copy");

    copyTextToClipboard('Text copied to clipboard')

  }

  const {
    name,
    country,
    daysList,
    url_to_share,
    error } = props;


    const days = daysList.map(day => (
      <Day
      temp_min={temperatureUnit(day.main.temp_min)}
      temp_max={temperatureUnit(day.main.temp_max)}
      feels_like={temperatureUnit(day.main.feels_like)}
      weatherInfo={day.weather[0]}

      />
      )
    )
  // If the user misppells the name of city or state, the app will not break, instead, it will display an error message
  return(

    <section id='weather-results'>
      { error
        ?
        <p>{error}</p>
        :
        <section>
          <p>{name}, {country}</p>
          <div className='url_to_share'>
            <input id='sharing-url' type='text' value={url_to_share} onClick={() => shareUrl()}/>
            <p>{wasTextCopied}</p>
          </div>
          <button onClick={() => setTemperatureUnit(!temperatureChosen)}> Change Temperature Unit </button>
          {days}
        </section>
      }
    </section>

  )
}
