import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import AppRoute from "./routes/AppRoute";
import theme from "./theme";
import GlobalStyles from "./components/GlobalStyles";
import { MuiThemeProvider } from "@material-ui/core/styles";

export default function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <GlobalStyles />
        <BrowserRouter>
          <Switch>
            <AppRoute />
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    </div>
  );
}
