import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { Computers } from "./Computers";
import { Home } from "./Home";
import { Users } from "./Users";
import { Header } from "./Header";
import theme from "./theme/theme";

// Material-UI
import { makeStyles, ThemeProvider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  pageContainer: {
    width: "100%",
    maxWidth: "1920px",
    margin: "0 auto",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className={classes.pageContainer}>
          <Header />

          <Route exact path="/" component={Home} />
          <Route path="/users" component={Users} />
          <Route path="/computers" component={Computers} />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
