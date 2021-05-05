import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 300,
    maxWidth: 300,
    marginLeft: "10px",
    marginRight: "10px",
  },
  spaceBetween: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const CardVenue = ({ venueInfo }) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent className={classes.spaceBetween}>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
          {venueInfo.name}
          {venueInfo.categories
            ? venueInfo.categories[0]
              ? " - " + venueInfo.categories[0].name
              : null
            : null}
        </Typography>
        <Typography variant="h5" component="h2">
          Address : {venueInfo.location.address}, {venueInfo.location.city}
        </Typography>
        <Button size="small">Learn More</Button>
      </CardContent>
    </Card>
  );
};

CardVenue.PropTypes = {
  VenueInfo: PropTypes.any,
};

export default CardVenue;
