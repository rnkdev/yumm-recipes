export const RECEIVE_SAVED_RECIPES = 'RECEIVE_SAVED_RECIPES';
export const SET_SAVE_STATUS = 'SET_SAVE_STATUS';

export function receiveSavedRecipes(recipes) {
  return { type: RECEIVE_SAVED_RECIPES, recipes } 
}

export function setSaveStatus(status) {
  return { type: SET_SAVE_STATUS, status }
}

export function loadRecipe() {
  return dispatch => {
    const savedRecipesJson = localStorage.getItem('savedRecipes');
    const savedRecipes = JSON.parse(savedRecipesJson);

    return dispatch(receiveSavedRecipes(savedRecipes));
  }
}

export function saveRecipe(recipe) {
  return dispatch => {
    dispatch(setSaveStatus(true));

    //Load all of the available recipes
    const savedRecipesJson = localStorage.getItem('savedRecipes');
    let savedRecipes = [];
    let newRecipes = [];
    let newRecipesJson = '';

    if (savedRecipesJson) {
      savedRecipes = JSON.parse(savedRecipesJson);
      newRecipes = savedRecipes.concat(recipe);
    } else {
      newRecipes = [recipe];
    }

    newRecipesJson = JSON.stringify(newRecipes);
    localStorage.setItem('savedRecipes', newRecipesJson);

    dispatch(setSaveStatus(false));
    return true;
  }
}