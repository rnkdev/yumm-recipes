import React, { Component } from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';

class SaveDialog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      note: '',
    }
  }

  render() {
    const { 
      open, 
      handleClickOpen,
      handleRequestSave,
      handleRequestClose,
      menuName,
      recipe,
    } = this.props;
    const {
      recipeName
    } = recipe;
    return (
      <div>
        <Dialog open={open} onRequestClose={handleRequestClose}>
          <DialogTitle>Save Menu</DialogTitle>
          <DialogContent>
            <DialogContentText>
              You are about to save {recipeName} to your saved recipe list.<br></br> Please
              enter any notes you would like to save with the recipe. 
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="note"
              label="Notes"
              type="text"
              value={this.state.note}
              onChange={e => this.setState({ note: e.target.value }) }
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleRequestClose} color="primary">
              Cancel
            </Button>
            <Button onClick={() => {
              const recipeWithNote = {
                ...recipe,
                note: this.state.note,
              }
              handleRequestClose();
              return handleRequestSave(recipeWithNote);
            }} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default SaveDialog;