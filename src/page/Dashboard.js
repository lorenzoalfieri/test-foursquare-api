import React, { useState, useEffect } from "react";

import axios from "axios";

import GetVenues from "../components/Dashboard/GetVenues";
import CardVenue from "../components/Dashboard/CardVenue";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

const Dashboard = () => {
  const [venues, setVenues] = useState(null);

  useEffect(() => {}, [venues]);
  if (venues === null) {
    return <GetVenues setVenues={setVenues} />;
  } else {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Container maxWidth={false}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "30px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Link
                component="button"
                style={{ lineHeight: "30px" }}
                variant={"body2"}
                onClick={() => setVenues(null)}
              >
                {"<- Go back to search venues"}
              </Link>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Grid container spacing={2}>
                {venues.map((venue, index) => (
                  <Grid
                    key={"grid-" + index}
                    container
                    item
                    xs={12}
                    xl={3}
                    lg={4}
                    md={5}
                  >
                    <CardVenue key={"card-" + index} venueInfo={venue} />
                  </Grid>
                ))}
              </Grid>
            </div>
          </div>
        </Container>
      </div>
    );
  }
};

export default Dashboard;
