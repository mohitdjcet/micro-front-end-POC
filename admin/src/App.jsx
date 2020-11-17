import { CssBaseline, createStyles, makeStyles } from "@material-ui/core";

import { HashRouter } from "react-router-dom";
import React, {useState, useEffect} from "react";
import Routes from "./Routes";
import SideNav from "./SideNav";
import {eventsToDispatch} from './utils/events';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: "flex"
    }
  })
);

function App() {
  const classes = useStyles();
  const [fullScreen, setFullScreen] = useState(true);
  const updateHostScreen = (event) => {
    setFullScreen(event.detail);
  }
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener(eventsToDispatch.HOST_FULL_SCREEN, updateHostScreen);
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener(eventsToDispatch.HOST_FULL_SCREEN, updateHostScreen)
      }
    }
  }, [])
  return (
    <HashRouter>
      <CssBaseline />
      <div className={classes.root}>
        {fullScreen && <SideNav /> }
        <Routes />
      </div>
    </HashRouter>
  );
}

export default App;
