import React, { useState } from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Popover from "@material-ui/core/Popover";

import clsx from "clsx";
import axios from "axios";
import { useSnackbar } from "notistack";

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
  header: {
    textAlign: "center",
    spacing: 10,
  },
  action: {
    display: "flex",
    justifyContent: "space-around",
  },
  spacing: {
    margin: "20px",
  },
  smallMarginBottom: {
    marginBottom: "5px",
  },
});

const CardVenue = ({ venueInfo, index }) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [anchorEl, setAnchorEl] = useState(null);
  const [venueDetails, setVenueDetails] = useState(null);
  const [open, setOpen] = useState(false);
  let address = "Unknown";

  if (venueInfo.location.address) {
    address =
      venueInfo.location.address +
      (venueInfo.location.city ? ", " + venueInfo.location.city : "");
  } else if (venueInfo.location.city) {
    address = venueInfo.location.city;
  }

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
    setVenueDetails(null);
  };

  const getDetailOfVenue = async (event) => {
    await axios
      .get("https://api.foursquare.com/v2/venues/" + venueInfo.id, {
        params: {
          client_id: "L1KSHKDZKZ5PWD10OUI4HMUNZOHDA0NP2H00U122JW41F5J5",
          client_secret: "EH1ZMZEM2LFEZC0QTKZAL3XN4N203G1SKVTUS1NH5LFMRCUH",
          v: "20180323",
        },
      })
      .then((res) => {
        setAnchorEl(event.target);
        setVenueDetails(res.data.response.venue);
        setOpen(true);
      })
      .catch((err) => {
        enqueueSnackbar(
          "There was an error while retrieving details for this venue.",
          {
            variant: "error",
          },
        );
        console.error(err);
      });
  };

  return (
    <Card
      data-testid={"card-" + index}
      id={"card-" + index}
      className={clsx(classes.root, classes.spaceBetween)}
      raised={true}
    >
      <CardHeader title={venueInfo.name} className={classes.header} />
      <Divider variant="middle" />
      <CardContent>
        <Typography>
          {venueInfo.categories
            ? venueInfo.categories[0]
              ? "Venue type : " + venueInfo.categories[0].name
              : ""
            : ""}
        </Typography>
        <br />
        <Typography>Address : {address}</Typography>
      </CardContent>
      <Divider variant="middle" />
      <CardActions className={classes.action}>
        <Button
          id={"button-venue-details-" + index}
          color={"primary"}
          size="small"
          onClick={getDetailOfVenue}
        >
          This is my shop
        </Button>
        <Popover
          id={"popover-venue-details"}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <div className={classes.spacing} id="popover-details">
            <Typography variant={"h4"} className={classes.smallMarginBottom}>
              Rating:{" "}
              {venueDetails && venueDetails.rating
                ? venueDetails.rating
                : "No rating yet !"}
            </Typography>
            <Typography variant={"h4"} className={classes.smallMarginBottom}>
              Number of checkins:{" "}
              {venueDetails && venueDetails.stats.checkinsCount
                ? venueDetails.stats.checkinsCount
                : 0}
            </Typography>
            <Typography variant={"h4"} className={classes.smallMarginBottom}>
              Number of tip:{" "}
              {venueDetails && venueDetails.stats.tipCount
                ? venueDetails.stats.tipCount
                : 0}
            </Typography>
            <Typography variant={"h4"} className={classes.smallMarginBottom}>
              Number of users:{" "}
              {venueDetails && venueDetails.stats.usersCount
                ? venueDetails.stats.usersCount
                : 0}
            </Typography>
            <Typography variant={"h4"}>
              Number of visits:{" "}
              {venueDetails && venueDetails.stats.visitsCount
                ? venueDetails.stats.visitsCount
                : 0}
            </Typography>
          </div>
        </Popover>
      </CardActions>
    </Card>
  );
};

CardVenue.propTypes = {
  venueInfo: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    categories: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string })),
    location: PropTypes.shape({
      city: PropTypes.string,
      address: PropTypes.string,
    }),
  }).isRequired,
  index: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default CardVenue;
