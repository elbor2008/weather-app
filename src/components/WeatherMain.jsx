import React from 'react';
import CurrentWeather from './CurrentWeather';
import WeatherForecast from './WeatherForecast';

export default function WeatherMain() {
  return (
    <div className="weather-main">
      <CurrentWeather />
      <WeatherForecast />
    </div>
  );
}
