import axios from 'axios';
import { put, call, takeEvery, all, select } from 'redux-saga/effects';

function* fetchData(action) {
  try {
    yield put({ type: 'SET_LOADING', payload: { isLoading: true } });
    const cityName = action.payload.city || '';
    let weather = yield call(() =>
      axios.get('http://localhost:5000/api/weather?city=' + cityName)
    );
    weather = weather.data.data;
    let forecast = yield call(() =>
      axios.get('http://localhost:5000/api/forecast?city=' + cityName)
    );
    forecast = forecast.data.data;
    const { city } = forecast;
    const limit = action.payload.limit;
    forecast = forecast.weathers.filter((value, index) => index <= limit);
    yield put({ type: 'INIT', payload: { weather, forecast, city } });
    yield put({ type: 'SET_LOADING', payload: { isLoading: false } });
  } catch (e) {
    yield put({ type: 'ERROR' });
  }
}
function* fetchDataByLimit(action) {
  try {
    yield put({ type: 'SET_LOADING', payload: { isLoading: true } });
    const { limit } = action.payload;
    const state = yield select();
    const city = state.city.name;
    let forecast = yield call(() =>
      axios.get('http://localhost:5000/api/forecast?city=' + city)
    );
    forecast = forecast.data.data;
    forecast = forecast.weathers.filter((value, index) => index <= limit);
    yield put({ type: 'INIT', payload: { forecast } });
    yield put({ type: 'SET_LOADING', payload: { isLoading: false } });
  } catch (e) {
    yield put({ type: 'ERROR' });
  }
}

function* fetchDataSaga() {
  yield takeEvery('FETCH_DATA_ASYNC', fetchData);
}
function* fetchDataByLimitSaga() {
  yield takeEvery('FETCH_BY_LIMIT_ASYNC', fetchDataByLimit);
}
function* rootSaga() {
  yield all([fetchDataSaga(), fetchDataByLimitSaga()]);
}

export default rootSaga;
