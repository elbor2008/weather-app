import React from 'react';
import { connect } from 'react-redux';
import iconUmberella from '../images/icon-umberella.png';
import iconWind from '../images/icon-wind.png';
import iconCompass from '../images/icon-compass.png';

function CurrentWeather(props) {
  const { weather, city } = props;
  return (
    <div className="current-weather">
      <div className="current-weather__city">
        {city.name}, {city.country}
      </div>
      <div className="current-weather__condition">{weather.main}</div>
      <div className="current-weather__temperature">{weather.temp} C</div>
      <div className="current-weather__description">
        <div>
          <img src={iconUmberella} alt="" />
          <span>{weather.humidity}%</span>
        </div>
        <div>
          <img src={iconWind} alt="" />
          <span>{weather.windSpeed} km/h</span>
        </div>
        <div>
          <img src={iconCompass} alt="" />
          <span>{weather.windDirection}</span>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    weather: state.weather,
    city: state.city
  };
};
export default connect(
  mapStateToProps,
  null
)(CurrentWeather);
