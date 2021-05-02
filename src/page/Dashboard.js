import React, { useState, useEffect } from "react";

import axios from "axios";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useSnackbar } from "notistack";

const Dashboard = () => {
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
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
    enqueueSnackbar("Successfully retreived your location !", {
      variant: "success",
    });
  };

  const locationError = () => {
    enqueueSnackbar("Unable to retreive your location !", { variant: "error" });
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
      .then((res) => console.info(res))
      .catch(() => {
        enqueueSnackbar("There was an error while earching for venues.", {
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
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
            margin="dense"
            label="Longitude"
            type="text"
            variant="outlined"
            style={{ width: "48%" }}
          />
        </div>
        <Button variant="contained" color={"primary"} onClick={getMyLocation}>
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
          required
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          margin="dense"
          label="Keyword"
          type="text"
          variant="outlined"
        />
        <Button
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

export default Dashboard;
