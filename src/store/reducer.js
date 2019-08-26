const initialState = {
  weather: {},
  forecast: [],
  city: {},
  isError: false,
  isLoading: false
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
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: payload.isLoading
      };
    default:
      return state;
  }
};
