import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

import DynamicSearchBar from '../../containers/DynamicSearchBar';

const styles = theme => ({
  root: {
    width: '100%',
  },
  flexContainer: {
    display: 'flex',
  },
  fullFlex: {
    flex: 1,
  },
  halfFlex: {
    flex: 0.5,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  savedButton: {
    textDecoration: 'underline',
  },
});

function AppHeader(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography type="title" color="inherit" className={classes.fullFlex} component={Link} to={'/'} style={{textDecoration: 'none'}}>
            Yummy Recipes
          </Typography>
          <DynamicSearchBar />
          <Button color="contrast" component={NavLink} to={'/saved'} activeClassName={classes.savedButton}>Saved</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

AppHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppHeader);