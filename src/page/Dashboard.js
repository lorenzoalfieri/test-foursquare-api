import React, { useState, useEffect } from "react";

import GetVenues from "../components/Dashboard/GetVenues";
import CardVenue from "../components/Dashboard/CardVenue";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { SnackbarProvider } from "notistack";

const Dashboard = ({ venuesTest }) => {
  const [venues, setVenues] = useState(venuesTest ? venuesTest : null);

  useEffect(() => {}, [venues]);
  if (venues === null) {
    return (
      <SnackbarProvider maxSnack={3}>
        <GetVenues setVenues={setVenues} />
      </SnackbarProvider>
    );
  } else {
    return (
      <SnackbarProvider maxSnack={3}>
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
                  data-testid="link-back"
                  id="link-back"
                  component="button"
                  style={{ lineHeight: "30px" }}
                  variant={"body2"}
                  onClick={() => setVenues(null)}
                >
                  {"<- Go back to search venues"}
                </Link>
              </div>
              <br />
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
                      key={"grid-" + index.toString()}
                      container
                      item
                      xs={12}
                      xl={3}
                      lg={4}
                      md={5}
                    >
                      <CardVenue
                        key={"card-" + index.toString()}
                        venueInfo={venue}
                        index={index.toString()}
                      />
                    </Grid>
                  ))}
                </Grid>
              </div>
            </div>
          </Container>
        </div>
      </SnackbarProvider>
    );
  }
};

export default Dashboard;
