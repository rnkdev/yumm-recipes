import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import SearchActions

import SearchBar from '../components/SearchBar';

function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({}, dispatch),
    dispatch 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);