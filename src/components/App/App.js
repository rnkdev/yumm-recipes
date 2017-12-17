import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import AppHeader from '../AppHeader';
import RecipeView from '../../containers/RecipeViewPage';
import SavedRecipeView from '../../containers/SavedRecipeViewPage';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <Switch>
          <Route exact path={'/'} component={RecipeView} />
          <Route exact path={'/saved'} component={SavedRecipeView} />
        </Switch>
      </div>
    );
  }
}

export default App;