import headlinesReducer from './../../reducers/headlines-reducer';
import * as constants from './../../actions/ActionTypes';

describe('headlinesReducer', () => {
  
  const defaultState = {
    isLoading: false,
    headlines: [],
    error: null
  };

  let action;

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

});