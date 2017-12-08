import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { LinearProgress } from 'material-ui/Progress';

function AutoLinearProgress(props) {
  const { isLoading } = props;
  return (
    <div>
      {
        isLoading && 
        <LinearProgress />
      }
    </div>
  );
}

function mapStateToProps(state) {
  return {
    isLoading: state.recipes.isLoading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({ }, dispatch),
    dispatch 
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AutoLinearProgress);