const initialState = {
  weather: {},
  forecast: [],
  city: {},
  isError: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'INIT':
      return { ...state, ...payload, isError: false };
    case 'ERROR':
      return {
        weather: {},
        forecast: [],
        city: {},
        isError: true
      };
    default:
      return state;
  }
};
