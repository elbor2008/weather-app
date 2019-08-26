import React, { Component } from 'react';
import { connect } from 'react-redux';
import dayjs from 'dayjs';

class WeatherForecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: 4
    };
  }
  handleSearch = limit => {
    this.setState({ limit });
    this.props.searchByLimit(limit);
  };
  render() {
    const { forecast } = this.props;
    return (
      <div className="weather-forecast">
        <div className="weather-forecast__switch">
          <button
            className={
              this.state.limit === 4
                ? 'weather-forecast__switch--5 active'
                : 'weather-forecast__switch--5'
            }
            onClick={() => this.handleSearch(4)}
          >
            5 items
          </button>
          <button
            className={
              this.state.limit === 9
                ? 'weather-forecast__switch--10 active'
                : 'weather-forecast__switch--10'
            }
            onClick={() => this.handleSearch(9)}
          >
            10 items
          </button>
        </div>
        {forecast.map(value => (
          <div className="weather-forecast__row" key={value.dt}>
            <span className="weather-forecast__row--day">
              {dayjs(value.datetime).format('ddd')}
            </span>
            <span className="weather-forecast__row--time">
              {dayjs(value.datetime).format('HH: mm')}
            </span>
            <span className="weather-forecast__row--high">
              {value.maxTemp} c
            </span>
            <span className="weather-forecast__row--low">
              {value.minTemp} c
            </span>
          </div>
        ))}
        <div className="weather-forecast__footer">Powered by React</div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    forecast: state.forecast
  };
};
const mapDispatchToProps = dispatch => {
  return {
    searchByLimit: limit => {
      dispatch({ type: 'FETCH_BY_LIMIT_ASYNC', payload: { limit } });
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherForecast);
