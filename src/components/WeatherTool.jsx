import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherTool extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: ''
    };
  }
  handleChange = e => {
    this.setState({ city: e.target.value });
  };
  handleSearch = city => {
    this.props.searchByCity(city);
  };
  render() {
    const { city } = this.state;
    return (
      <div className="weather-tool">
        <input
          type="text"
          className="weather-tool__input"
          value={city}
          onChange={this.handleChange}
        />
        <button
          className="weather-tool__btn"
          onClick={() => this.handleSearch(city)}
        >
          <sup>°</sup>C
        </button>
        {this.props.isError && (
          <span style={{ color: 'red', marginLeft: '5px', lineHeight: '34px' }}>
            Wrong city name!!!
          </span>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isError: state.isError
  };
};
const mapDispatchToProps = dispatch => {
  return {
    searchByCity: city => {
      dispatch({ type: 'FETCH_DATA_ASYNC', payload: { city, limit: 4 } });
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherTool);
