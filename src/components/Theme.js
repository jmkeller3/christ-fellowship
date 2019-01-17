import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import App from "./App";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#44a187",
      contrastText: "#fff"
    },
    secondary: {
      main: "#93cbab",
      contrastText: "#000"
    }
  },
  typography: {
    useNextVariants: true
  }
});

export default function Theme() {
  return (
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  );
}
