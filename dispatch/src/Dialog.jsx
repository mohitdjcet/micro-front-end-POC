import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
const  CLICK_NAVBAR_APP_BUTTON= 'CLICK_NAVBAR_APP_BUTTON';
import React, { useEffect } from "react";
import dispatchEvent, {eventsToDispatch}  from './utils/events';

function DialogComponent() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const localStorageUpdated = (event) => {
    setOpen(event.detail);
  }
  const handleFullScreen = (value) => {
    dispatchEvent(eventsToDispatch.HOST_FULL_SCREEN, value);
  }
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener(CLICK_NAVBAR_APP_BUTTON, localStorageUpdated);
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener(CLICK_NAVBAR_APP_BUTTON, localStorageUpdated)
      }
    }
  }, [])

  return (
    <div  style={{display: 'inline-grid'}}>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Open Dialog
      </Button>
      <Button
            style={{marginTop: '10px'}}
        onClick={() => {handleFullScreen(false)}}
        variant="contained"
        color="primary"
        autoFocus
      >
        Enable full screen
      </Button>
      <Button
            style={{marginTop: '10px'}}
        onClick={() => {handleFullScreen(true)}}
        variant="contained"
        color="secondary"
        autoFocus
      >
        Exit full screen
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Dispatch</DialogTitle>
        <DialogContent>
          <DialogContentText>
            This is a dialog from the Material UI app rendered in a React{" "}
            <code>Portal</code>.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            variant="contained"
            color="primary"
            autoFocus
          >
            Nice
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DialogComponent;
