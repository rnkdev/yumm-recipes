import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  searchInput: {
    flex: 0.5,
    height: '20px',
    borderRadius: 4,
    background: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 12px',
    width: 'calc(100% - 24px)',
    marginRight: '16px',
  }
});

function SearchBar(props) {
  const { classes } = props;
  return (
    <input 
      type="text"
      className={classes.searchInput} 
      placeholder="Search recipes..." 
      onKeyPress={(e) => { 
        if (e.key == 'Enter') {
          props.searchRecipe(e.target.value) 
        }
      }}
    />  
  );
}

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchBar);