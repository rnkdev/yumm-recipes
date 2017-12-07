import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchRecipe } from '../actions/search';

// Import SearchActions

import SearchBar from '../components/SearchBar';

function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({ searchRecipe }, dispatch),
    dispatch 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);