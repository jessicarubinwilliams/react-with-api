import * as constants from './ActionTypes';

export const requestHeadlines = () => ({
  type: constants.REQUEST_HEADLINES
});

export const getHeadlinesSuccess = (headlines) => ({
  type: constants.GET_HEADLINES_SUCCESS,
  headlines
});

export const getHeadlinesFailure = (error) => ({
  type: constants.GET_HEADLINES_FAILURE,
  error
});