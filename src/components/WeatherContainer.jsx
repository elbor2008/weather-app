import React, { Component } from 'react';

export default class WeatherContainer extends Component {
  render() {
    return <div className="weather-container">{this.props.children}</div>;
  }
}
