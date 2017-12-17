import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadRecipe } from '../actions/save';

import SavedRecipeView from '../components/SavedRecipeView';

function mapStateToProps(state) {
  return {
    recipes: state.recipes.saved,
    isLoading: state.recipes.isLoading,
    errorMessage: state.recipes.errorMessage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({ loadRecipe }, dispatch),
    dispatch 
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SavedRecipeView);