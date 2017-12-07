import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import mainReducer from './reducers';

export default function configureStore() {
  return createStore(
    mainReducer,
    {}, // initial state
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
}