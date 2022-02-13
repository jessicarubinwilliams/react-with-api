import * as actions from './../../actions';
import * as constants from './../../actions/ActionTypes';

describe('headline reducer actions', () => {
  it('requestHeadlines should create REQUEST_HEADLINES action', () => {
    expect(actions.requestHeadlines()).toEqual({
      type: constants.REQUEST_HEADLINES
    });
  });

  it('getHeadlinesSuccess should create GET_HEADLINES_SUCCESS action', () => {
    const headlines = "A headline";
    expect(actions.getHeadlinesSuccess(headlines)).toEqual({
      type: constants.GET_HEADLINES_SUCCESS,
      headlines
    });
  });

  it('getHeadlinesFailure should create GET_HEADLINES_FAILURE action', () => {
    const error = "An error";
    expect(actions.getHeadlinesFailure(error)).toEqual({
      type: constants.GET_HEADLINES_FAILURE,
      error
    });
  });
});