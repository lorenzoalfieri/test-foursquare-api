import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import axios from "axios";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useSnackbar } from "notistack";

const GetVenues = ({ setVenues }) => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [keyword, setKeyword] = useState("");

  const [submitDisable, setSubmitDisable] = useState(true);

  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (latitude !== "" && longitude !== "" && keyword !== "") {
      setSubmitDisable(false);
    } else {
      setSubmitDisable(true);
    }
  });

  const locationSuccess = (position) => {
    setLatitude(position.coords.latitude.toString());
    setLongitude(position.coords.longitude.toString());
    enqueueSnackbar("Successfully retrieved your location !", {
      variant: "success",
    });
  };

  const locationError = () => {
    enqueueSnackbar("Unable to retrieve your location !", { variant: "error" });
  };

  const getMyLocation = () => {
    if (!navigator.geolocation) {
      enqueueSnackbar("Geolocation is not supported by your browser", {
        variant: "error",
      });
    } else {
      navigator.geolocation.getCurrentPosition(locationSuccess, locationError);
    }
  };

  const searchVenue = async () => {
    await axios
      .get("https://api.foursquare.com/v2/venues/search", {
        params: {
          client_id: "L1KSHKDZKZ5PWD10OUI4HMUNZOHDA0NP2H00U122JW41F5J5",
          client_secret: "EH1ZMZEM2LFEZC0QTKZAL3XN4N203G1SKVTUS1NH5LFMRCUH",
          ll: latitude + "," + longitude,
          query: keyword,
          v: "20180323",
          limit: 10,
        },
      })
      .then((res) => {
        enqueueSnackbar("Venues close to your location retrieved.", {
          variant: "success",
        });
        setVenues(res.data.response.venues);
      })
      .catch(() => {
        enqueueSnackbar("There was an error while Searching for venues.", {
          variant: "error",
        });
      });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "60vh",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginLeft: "10px",
            marginRight: "10px",
          }}
        >
          <TextField
            id="latitude"
            required
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
            margin="dense"
            label="Latitude"
            type="text"
            variant="outlined"
            style={{ width: "48%" }}
          />
          <TextField
            required
            id="longitude"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
            margin="dense"
            label="Longitude"
            type="text"
            variant="outlined"
            style={{ width: "48%" }}
          />
        </div>
        <Button
          id="btn-get-location"
          variant="contained"
          color={"primary"}
          onClick={getMyLocation}
        >
          Get my location
        </Button>
      </div>
      <div
        style={{
          marginTop: "10px",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <TextField
          id="keyword"
          required
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          margin="dense"
          label="Keyword"
          type="text"
          variant="outlined"
        />
        <Button
          data-testid="btn-submit"
          id="btn-submit"
          disabled={submitDisable}
          variant="contained"
          color={"primary"}
          onClick={searchVenue}
          style={{ marginLeft: "20px" }}
        >
          Search
        </Button>
      </div>
    </div>
  );
};

GetVenues.propTypes = {
  setVenues: PropTypes.func,
};

export default GetVenues;
