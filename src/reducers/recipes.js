import * as RecipeActions from '../actions/search';

const initialState = {
  main: [],
  saved: [],
  isLoading: false, 
  errorMessage: '',
}

export default function recipes(state = initialState, action) {
  switch (action.type) {
    case RecipeActions.SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.message
      };

    case RecipeActions.SET_LOADING_STATUS:
      return {
        ...state,
        isLoading: action.status
      };

    case RecipeActions.RECEIVE_RECIPES:
      return {
        ...state,
        main: action.recipes
      };

    default:
      return state;
  }
}