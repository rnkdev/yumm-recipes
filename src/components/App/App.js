import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import logo from './logo.svg';

import AppHeader from '../AppHeader';

import './App.css';

function recipesView(props) {
  return (
    <p className="App-Recipes">
      Here are the list of recipes: 
    </p>
  );
}

function savedRecipesView(props) {
  return (
    <p className="App-Saved">
      Here are your saved recipes:
    </p>
  );
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <Switch>
          <Route exact path={'/'} component={recipesView} />
          <Route exact path={'/saved'} component={savedRecipesView} />
        </Switch>
      </div>
    );
  }
}

export default App;