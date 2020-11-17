import {
  Button,
  Dialog,
  AppBar,
  ListItemText,
  ListItem,
  List,
  Toolbar,
  Divider
} from "@material-ui/core";

import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect } from "react";
import dispatchEvent, {eventsToDispatch}  from './utils/events';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

const  CLICK_NAVBAR_APP_BUTTON= 'CLICK_NAVBAR_APP_BUTTON';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function DialogComponent() {
  const classes = useStyles();
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
    <div style={{display: 'inline-grid'}}>
       <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open full-screen dialog
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Sound
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem button>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Default notification ringtone" secondary="Tethys" />
          </ListItem>
        </List>
      </Dialog>
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
      
    </div>
  );
}

export default DialogComponent;
