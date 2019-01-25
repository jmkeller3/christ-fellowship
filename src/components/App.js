import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
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
        exact: false,
        main: () => <Sermons />
      },
      {
        path: "/about/",
        exact: false,
        main: () => <About />
      },
      {
        path: "/contact",
        exact: false,
        main: () => <Contact />
      }
    ];

    const HomeLink = props => <Link to="/" {...props} />;
    const SermonLink = props => <Link to="/sermons" {...props} />;
    const AboutLink = props => <Link to="/about" {...props} />;
    const ContactLink = props => <Link to="/contact" {...props} />;

    return (
      <Router>
        <Route
          render={({ location }) => (
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
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  timeout={500}
                  classNames="fade"
                >
                  <Switch location={location}>
                    {routes.map(route => (
                      <Route
                        key={route.path}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                      />
                    ))}
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </div>
          )}
        />
      </Router>
    );
  }
}

export default App;
