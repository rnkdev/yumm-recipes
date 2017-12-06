import { createStore } from 'redux';

import mainReducer from './reducers';

export default function configureStore() {
  return createStore(
    mainReducer,
    {}, // initial state
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
}