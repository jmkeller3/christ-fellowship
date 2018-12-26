import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import Sidebar from "./Sidebar";

import "./App.css";

class App extends Component {
  render() {
    const routes = [
      {
        path: "/",
        exact: true,
        sidebar: undefined,
        main: () => <Home />
      },
      {
        path: "/about",
        exact: true,
        sidebar: () => <Sidebar links={["about"]} />,
        main: () => <About />
      },
      {
        path: "/contact",
        exact: true,
        sidebar: () => <Sidebar links={["contact"]} />,
        main: () => <Contact />
      }
    ];
    return (
      <Router>
        <div className="wrapper">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <div className="sidebar">
            {routes.map(route => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.sidebar}
              />
            ))}
          </div>
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
