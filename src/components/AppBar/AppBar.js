import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import {
  AppBar,
  IconButton,
  Toolbar,
  Tooltip,
  Dialog,
  Typography,
  Slide,
} from "@material-ui/core";
// import GitHubIcon from "@material-ui/icons/GitHub";
// import InfoIcon from "@material-ui/icons/Info";
import CloseIcon from "@material-ui/icons/Close";

import LogoText from "./splash.png";
// import { createTheme } from "@material-ui/core/styles";

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "red",
//     },
//   },
// });

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    display: "flex",
    // flexGrow: 1,
    textAlign: "left",
    verticalAlign: "bottom",
    alignItems: "center",
    justifyItems: "center",
  },
  nameApp: {
    marginLeft: "10px",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.title}>
            <img
              src={LogoText}
              height="38px"
              alt="logo with text"
              className={classes.title}
            />
            <b className={classes.nameApp}>Art-Generator App</b>
          </div>
          {/* <Tooltip title="Github Repo Link">
            <IconButton
              aria-label="github repo"
              aria-controls="menu-appbar"
              color="inherit"
            >
              <a
                href="#"
                rel="noopener noreferrer"
                target="_blank"
                style={{ color: "inherit", textDecoration: "none", height: 24 }}
              >
                <GitHubIcon />
              </a>
            </IconButton>
          </Tooltip>

          <Tooltip title="About">
            <IconButton
              aria-label="about"
              aria-controls="menu-appbar"
              color="inherit"
              onClick={handleClickOpen}
            >
              <InfoIcon />
            </IconButton>
          </Tooltip> */}
        </Toolbar>
      </AppBar>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <Toolbar>
          <Typography
            variant="h5"
            style={{ textAlign: "center" }}
            className={classes.title}
          >
            <b>About Art - Generator</b>
          </Typography>
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </Dialog>
    </div>
  );
};
