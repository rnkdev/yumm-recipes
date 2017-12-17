import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

import './index.css';
import App from './components/App';
import configureStore from './configureStore';

import registerServiceWorker from './registerServiceWorker';

const store = configureStore();
const theme = createMuiTheme();

const AppRoot = () => (
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </MuiThemeProvider>
);

ReactDOM.render(<AppRoot />, document.getElementById('root'));
registerServiceWorker();