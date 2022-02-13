import headlinesReducer from './../../reducers/headlines-reducer';
import * as constants from './../../actions/ActionTypes';

describe('headlinesReducer', () => {
  
  let action;

  const defaultState = {
    isLoading: false,
    headlines: [],
    error: null
  };

  const loadingState = {
    isLoading: true,
    headlines: [],
    error: null
  };

  test('should successfully return the default state if no action is passed into it', () => {
    expect(headlinesReducer(defaultState, { type: null })).toEqual(
      {
        isLoading: false,
        headlines: [],
        error: null
      }
    );
  });

  test('requesting headlines should successfuly change isLoading from false to true', () => {
    action = {
      type: constants.REQUEST_HEADLINES
    };

    expect(headlinesReducer(defaultState, action)).toEqual({
      isLoading: true,
      headlines: [],
      error: null
    });
  });

  test('successfully getting headlines should change isLoading to false and update headlines', () => {
    const headlines = "A headline";
    action = {
      type: constants.GET_HEADLINES_SUCCESS,
      headlines
    };

    expect(headlinesReducer(loadingState, action)).toEqual({
      isLoading: false,
      headlines: "A headline",
      error: null
    });
  });
});