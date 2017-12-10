import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { GridList, GridListTile, GridListTileBar } from 'material-ui/GridList';
import Subheader from 'material-ui/List/ListSubheader';
import IconButton from 'material-ui/IconButton';
import StarBorderIcon from 'material-ui-icons/StarBorder';
import Infinite from 'react-infinite';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    background: theme.palette.background.paper,
    marginTop: '14px',
  },
  gridList: {
    width: '100%',
    minHeight: 800,
    transform: 'translateZ(0)',
  },
  infoText: {
    marginTop: '32px',
  },
  button: {
    position: 'fixed',
    margin: theme.spacing.unit,
    right: 10,
    bottom: 10,
    zIndex: 1,
  },
});

// Get larger image from google user content
function getLImg(imageUrl) {
  let newImageArr = imageUrl.split("=");
  newImageArr = newImageArr[0];

  return newImageArr;
}

class RecipeView extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      recipes: [],
      query: '',
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.recipes !== this.props.recipes) {
      const nextQuery = nextProps.recipes.criteria && nextProps.recipes.criteria.q ? nextProps.recipes.criteria.q : ''; 
      const currQuery = this.props.recipes.criteria && this.props.recipes.criteria.q ? this.props.recipes.criteria.q : ''; 
      // If query is different we have to reset the state recipe array 
      if (nextQuery !== currQuery) {
        let newState = this.state;
        newState.recipes = nextProps.recipes.matches ? nextProps.recipes.matches : [];
        newState.query = nextQuery;
        this.setState(newState);
      // If query is the same, it's pagination so we add to current recipe
      } else {
        let newState = this.state;
        newState.recipes = newState.recipes.concat(nextProps.recipes.matches ? nextProps.recipes.matches : []);
        newState.query = nextQuery;
        this.setState(newState);
      }
    }
  }

  render() {
    const { classes, searchRecipe } = this.props;
    return (
      <div className="RecipeView">
        <Button 
          fab 
          color="primary" 
          aria-label="add" 
          className={classes.button} 
          onClick={() => {
            if (this.state.recipes.length > 0) {
              searchRecipe(this.state.query, this.state.recipes.length)
            }
          }}>
          >>
        </Button>
        <div className={classes.container}>
          <GridList cellHeight={180} className={classes.gridList}>
            <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
              <Subheader component="div">
                Press enter to begin search...
              </Subheader>
            </GridListTile> 
            {
              this.state.recipes ? this.state.recipes.map(recipe => (
                <GridListTile key={recipe.id} cols={1}>
                  <img src={recipe.imageUrlsBySize && recipe.imageUrlsBySize['90'] ? getLImg(recipe.imageUrlsBySize['90']) : ''} alt={recipe.recipeName}/>
                  <GridListTileBar
                    title={recipe.recipeName}
                    subtitle={<span>Ratings: {recipe.rating}</span>}
                    actionIcon={
                      <IconButton>
                        <StarBorderIcon color="rgba(255, 255, 255, 0.54)" />
                      </IconButton>
                    }
                  />
                </GridListTile>
              )) : <div></div>
            }
          </GridList>
        </div>
      </div>
    );
  }
}

RecipeView.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(RecipeView);