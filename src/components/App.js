import React from "react";
import { ReactComponent as Logo } from "../images/sun.svg";
import WeatherForm from './WeatherForm'
import "../App.css";

function App() {
  return (
    <main>
      <h1>Weather App</h1>
      <WeatherForm />
    </main>
  );
}

export default App;
