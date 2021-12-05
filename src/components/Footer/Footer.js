import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import "./Footer.css";

import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.type === "dark" ? "#424242" : "#eeeeee",
    padding: "80px 8px",
  },
}));
export default (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className="container">
        <a
          href="#"
          rel="noopener noreferrer"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <GitHubIcon className="fa" color="action" fontSize="small" />
        </a>
      </div>
    </div>
  );
};
