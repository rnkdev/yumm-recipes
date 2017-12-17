import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { GridList, GridListTile, GridListTileBar } from 'material-ui/GridList';
import Subheader from 'material-ui/List/ListSubheader';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    overflow: 'hidden',
    background: theme.palette.background.paper,
    marginTop: '14px',
  },
  gridList: {
    width: '100%',
    minHeight: 200,
    transform: 'translateZ(0)',
  },
  infoText: {
    marginTop: '32px',
  },
});

// Get larger image from google user content
function getLImg(imageUrl) {
  let newImageArr = imageUrl.split("=");
  newImageArr = newImageArr[0];

  return newImageArr;
}

class SavedRecipeView extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { loadRecipe } = this.props;
    loadRecipe();
  }

  render() {
    const { classes, recipes } = this.props;
    return (
      <div className="SavedRecipeView">
        <div className={classes.container}>
          <GridList cellHeight={180} className={classes.gridList}>
            <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
              <Subheader component="div">
                Here are your saved recipe.
              </Subheader>
            </GridListTile> 
            {
              recipes ? recipes.map(recipe => (
                <GridListTile key={recipe.id} cols={1}>
                  <img src={recipe.imageUrlsBySize && recipe.imageUrlsBySize['90'] ? getLImg(recipe.imageUrlsBySize['90']) : ''} alt={recipe.recipeName}/>
                  <GridListTileBar
                    title={recipe.recipeName}
                    subtitle={<span>Ratings: {recipe.rating}</span>}
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

SavedRecipeView.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SavedRecipeView);