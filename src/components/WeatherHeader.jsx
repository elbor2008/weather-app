import React from 'react';
import logo from '../images/logo.png';

export default function WeatherHeader() {
  return (
    <div className="weather-header">
      <img className="weather-header__logo" src={logo} alt="logo" />
      <span className="weather-header__title">Weather Channel</span>
    </div>
  );
}
