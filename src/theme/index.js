import { createMuiTheme } from "@material-ui/core/styles";

import shadows from "./shadows";
import typography from "./typography";

const theme = createMuiTheme({
  palette: {
    background: {
      default: "#f8f8fa",
      appBar: "#ececf1",
      white: "#fff",
      black: "#343a40",
      lightDark: "#6c757d",
      darkGrey: "#5b626a",
      grey: "#aeb0b4",
      lighterGrey: "#f8f8fa",
      lightGrey: "#D8D8DF",
      green: "#01a499",
      lightGreen: "#a9ffb4",
      red: "#ec4561",
      lightRed: "#ffc5c5",
      lightBlue: "#7b85db",
      logoBlue: "#5382fa",
      darkBlue: "#3f51b5",
      blue: "#626ed4",
      flashyBlue: "#38a4f8",
      faintBlue: "#e2e4f7",
      yellow: "#f8b425",
      purple: "#b722f9",
      disabled: "#888888",
    },
    text: {
      white: {
        default: "#fff",
        primary: "#f8f8fa",
        secondary: "#d4d4d4",
      },
      black: {
        default: "#343a40",
      },
    },
  },
  shadows,
  typography,
});

export default theme;
