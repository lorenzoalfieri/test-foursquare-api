import React, { useState, useEffect } from "react";

import { Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  return <div style={{ display: "flex", flexDirection: "column" }}>Salut</div>;
};

export default Dashboard;
