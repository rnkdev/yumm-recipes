import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchRecipe } from '../actions/search';
import { saveRecipe } from '../actions/save';

import RecipeView from '../components/RecipeView';

function mapStateToProps(state) {
  return {
    recipes: state.recipes.main,
    isLoading: state.recipes.isLoading,
    errorMessage: state.recipes.errorMessage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({ searchRecipe, saveRecipe }, dispatch),
    dispatch 
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeView);