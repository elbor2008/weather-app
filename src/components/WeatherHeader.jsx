import React from 'react';
import { connect } from 'react-redux';
import logo from '../images/logo.png';

function WeatherHeader(props) {
  const { isLoading } = props;
  return (
    <div className="weather-header">
      <img className="weather-header__logo" src={logo} alt="logo" />
      <span className="weather-header__title">Weather Channel</span>
      {isLoading && <span style={{ marginLeft: '50px' }}>loading...</span>}
    </div>
  );
}
const mapStateToProps = state => {
  return {
    isLoading: state.isLoading
  };
};

export default connect(
  mapStateToProps,
  null
)(WeatherHeader);
