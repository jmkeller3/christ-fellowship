import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import Statement from "./Statement";
import Button from "@material-ui/core/Button";

import "./App.css";

class App extends Component {
  render() {
    const routes = [
      {
        path: "/",
        exact: true,
        main: () => <Home />
      },
      {
        path: "/about",
        exact: true,
        main: () => <About />
      },
      {
        path: "/contact",
        exact: true,
        main: () => <Contact />
      },
      {
        path: "/statement",
        exact: true,
        main: () => <Statement />
      }
    ];

    const HomeLink = props => <Link to="/" {...props} />;

    const AboutLink = props => <Link to="/about" {...props} />;
    const ContactLink = props => <Link to="/contact" {...props} />;

    return (
      <Router>
        <div className="wrapper">
          <nav>
            <Button component={HomeLink}>Home</Button>
            <Button component={AboutLink}>About</Button>
            <Button component={ContactLink}>Connect</Button>
          </nav>
          <div className="content" />
          {routes.map(route => (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}
        </div>
      </Router>
    );
  }
}

export default App;
