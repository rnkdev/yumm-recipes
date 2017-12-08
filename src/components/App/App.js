import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import AppHeader from '../AppHeader';
import RecipeView from '../../containers/RecipeViewPage';

import './App.css';

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
          <Route exact path={'/'} component={RecipeView} />
          <Route exact path={'/saved'} component={savedRecipesView} />
        </Switch>
      </div>
    );
  }
}

export default App;