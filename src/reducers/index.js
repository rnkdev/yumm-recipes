import { combineReducers } from 'redux';

import recipes from './recipes';

const mainReducer = combineReducers({
  recipes,
});

export default mainReducer;