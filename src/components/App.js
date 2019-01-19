import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import Sermons from "./Sermons";
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
        path: "/sermons",
        exact: true,
        main: () => <Sermons />
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
      }
    ];

    const HomeLink = props => <Link to="/" {...props} />;
    const SermonLink = props => <Link to="/sermons" {...props} />;
    const AboutLink = props => <Link to="/about" {...props} />;
    const ContactLink = props => <Link to="/contact" {...props} />;

    return (
      <Router>
        <div className="wrapper">
          <nav>
            <Button component={HomeLink}>Home</Button>
            <Button component={SermonLink}>Sermons</Button>
            <Button component={AboutLink}>About</Button>
            <Button component={ContactLink}>Contact</Button>
            {/* <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul> */}
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
