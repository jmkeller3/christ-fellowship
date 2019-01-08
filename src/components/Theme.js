import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import App from "./App";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#44a187"
    },
    secondary: {
      main: "#93cbab"
    }
  }
});

export default function Theme() {
  return (
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  );
}
