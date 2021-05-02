import React from "react";
import PropTypes from "prop-types";

import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import DashboardIcon from "@material-ui/icons/Dashboard";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    color: theme.palette.background.paper,
  },
  tiltIconLeft: {
    transform: "rotate(-15deg)",
  },
  allowed: {
    color: theme.palette.background.white,
    "&:hover": {
      backgroundColor: "black",
    },
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  disabled: {
    cursor: "not-allowed",
    color: theme.palette.background.disabled,
  },
  selected: {
    backgroundColor: theme.palette.background.darkGrey,
    "&:hover": {
      backgroundColor: "black",
    },
  },
}));

const ListItems = ({ name }) => {
  const classes = useStyles();

  const history = useHistory();

  const handleDashboard = () => {
    history.push("/dashboard");
  };

  return (
    <List
      component="nav"
      aria-labelledby="Menu navigation"
      className={classes.root}
    >
      <ListItem
        button
        onClick={name === "Dashboard" ? () => {} : handleDashboard}
        className={clsx(
          classes.allowed,
          name === "Dashboard" && classes.selected,
        )}
      >
        <ListItemIcon>
          <DashboardIcon className={classes.allowed} />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
    </List>
  );
};

ListItems.propTypes = {
  name: PropTypes.string,
};

export default ListItems;
