import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Typography,
  createStyles,
  makeStyles,
} from "@material-ui/core";

import AddIcon from '@material-ui/icons/Add';
import dispatchEvent, { eventsToDispatch } from './utils/events';

import { Link } from "react-router-dom";
import React from "react";

const drawerWidth = 240;

const useStyles = makeStyles((theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    toolbar: {
      ...theme.mixins.toolbar,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  })
);

export default function SideNav() {
  const classes = useStyles();

  const openModal = () => {
    dispatchEvent(eventsToDispatch.CLICK_NAVBAR_APP_BUTTON, true);
  }

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      <div className={classes.toolbar}>
        <Typography variant="h6">SideNav</Typography>
      </div>
      <Divider />
      <List>
        <ListSubheader>Demo Pages</ListSubheader>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Order" /> 
          <AddIcon onClick={openModal}/>
        </ListItem>
        {/* <ListItem button component={Link} to="/order">
          <ListItemText primary="Order" /> 
          <AddIcon onClick={openModal}/>
        </ListItem> */}
        <ListSubheader>Apps</ListSubheader>
        {/* <ListItem button component="a" href="http://localhost:3002">
          <ListItemText primary="Dispatch" secondary="http://localhost:3002" />
        </ListItem> */}
        <ListItem button component="a" href="http://localhost:3003">
          <ListItemText primary="Order" secondary="http://localhost:3003" />
        </ListItem>
      </List>
    </Drawer>
  );
}
