import React from 'react';

function SearchCard(props) {

   const { regionName, icon } = props.searchInfo
  return (
    <section>
      <section id='card'>
        <p> {regionName} </p>
        <img src={`https://openweathermap.org/img/w/${icon}.png`} alt='weather-icon'/>
      </section>
    </section>
  )
}

export default SearchCard;
