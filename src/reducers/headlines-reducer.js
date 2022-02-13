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
    default:
      return state;
  }
};