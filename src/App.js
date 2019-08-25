import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles/main.css';
import WeatherContainer from './components/WeatherContainer';
import WeatherHeader from './components/WeatherHeader';
import WeatherTool from './components/WeatherTool';
import WeatherMain from './components/WeatherMain';
import WeatherFooter from './components/WeatherFooter';

class App extends Component {
  componentDidMount() {
    this.props.init();
  }
  render() {
    return (
      <WeatherContainer>
        <WeatherHeader />
        <WeatherTool />
        <WeatherMain />
        <WeatherFooter />
      </WeatherContainer>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    init: () => {
      dispatch({ type: 'FETCH_DATA_ASYNC', payload: { limit: 4 } });
    }
  };
};
export default connect(
  null,
  mapDispatchToProps
)(App);
