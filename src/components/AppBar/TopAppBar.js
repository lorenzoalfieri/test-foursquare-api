import React from "react";
import clsx from "clsx";

import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import ListItems from "./ListCategoriesAppBar";
import Logo from "../Logo";
import { useHistory } from "react-router-dom";

let drawerWidth = 240;
let drawerCloseWidth = 72;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24,
    justifyContent: "space-between",
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    ...theme.mixins.toolbar,
    height: theme.spacing(4),
  },
  appBar: {
    backgroundColor: theme.palette.background.appBar,
    marginLeft: drawerCloseWidth,
    width: `calc(100% - ${drawerCloseWidth}px)`,
    zIndex: theme.zIndex.drawer + 1,
  },
  logoAppBar: {
    height: "100%",
    width: "100%",
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    backgroundColor: "#343548",
    width: drawerWidth,
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
}));

const NavBars = ({ name, MainContent }) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <div style={{ display: "flex" }}>
            <Typography
              style={{ color: "black", lineHeight: "50px" }}
              variant={"h3"}
            >
              {name}
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper),
        }}
        open={true}
      >
        <div className={classes.toolbarIcon}>
          <div style={{ maxWidth: "80%" }}>
            <Logo
              onClick={() => history.push("/dashboard")}
              className={classes.logoAppBar}
              size={"lg"}
            />
          </div>
        </div>
        <ListItems name={name} />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        {MainContent !== undefined ? <MainContent /> : null}
      </main>
    </div>
  );
};

NavBars.propTypes = {
  name: PropTypes.string,
  MainContent: PropTypes.func,
};

export default NavBars;
