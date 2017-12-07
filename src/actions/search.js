import { searchRecipe as _searchRecipe } from '../api/search';

export const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';
export const SET_LOADING_STATUS = 'SET_LOADING_STATUS';
export const RECEIVE_RECIPES = 'RECEIVE_RECIPES';

export function receiveRecipes(recipes) { 
  return { type: RECEIVE_RECIPES, recipes }
}

export function setError(message) {
  return { type: SET_ERROR_MESSAGE, message }
}

export function setLoading(status) {
  return { type: SET_LOADING_STATUS, status }
}

export function cleanError() {
  return dispatch => {
    return setError('');
  }
}

export function searchRecipe(query, start) {
  return dispatch => {
    setLoading(true);
    return _searchRecipe(query, start)
      .then(res => {
        if (res.status == 200) {
          console.log('Searching...');
          return res.json();
        }
        else if (res.status == 400) {
          console.log('Bad Request');
          setError('Bad Request');
        }
        else if (res.status == 409) {
          console.log('API Rate Limit Exceeded');
          setError('API Rate Limit Exceeded');
        } 
        else if (res.status == 500) {
          console.log('Internal Server Error');
          setError('Internal Server Error');
        }
        else {
          console.log('Unknown API Error Detected');
          setError('Unknown API Error Detected');
        }
        setLoading(false);
      })
      .then(jsonData => {
        console.log({ receipeData: jsonData });
        receiveRecipes(jsonData);
      })
  }
}
