import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import App from './components/App';
import configureStore from './configureStore';

import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

const AppRoot = () => (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

ReactDOM.render(<AppRoot />, document.getElementById('root'));
registerServiceWorker();