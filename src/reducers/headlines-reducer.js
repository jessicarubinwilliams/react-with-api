import * as constants from './../actions/ActionTypes'

const initialState = {
  isLoading: false,
  headlines: [],
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.REQUEST_HEADLINES:
      return Object.assign({}, state, {
        isLoading: true
      });
    case constants.GET_HEADLINES_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        headlines: action.headlines
      });
    default:
      return state;
  }
};