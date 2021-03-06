import React, { Component } from "react";
import {HashRouter, Route, Link, Switch} from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

import AboutCard from "./About-Card";
import Home from "./Home";
import Contact from "./Contact";
import Statement from "./Statement";
// import Sermons from './Sermons';
import Events from './Events';
import Podcast from './Podcast';
import Button from "@material-ui/core/Button";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./App.css";

// Icons from fortawesome
library.add(faEnvelope);
library.add(faFacebook);
library.add(faTwitter);
library.add(faInstagram);

class App extends Component {
  render() {
    // Routes for react-router
    const routes = [
      {
        path: "/",
        exact: true,
        main: () => <Home />
      },
      {
        path: "/about",
        exact: true,
        main: () => <AboutCard />
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
      },
      {
        path: "/sermons",
        exact: true,
        main: () => <Podcast />
      },
      {
        path: "/events",
        exact: true,
        main: () => <Events />
      }
    ];
    
// Links for buttons
    const HomeLink = props => <Link to="/" {...props} />;
    const StatementLink = props => <Link to="/statement" {...props} />;
    const AboutLink = props => <Link to="/about" {...props} />;
    const ContactLink = props => <Link to="/contact" {...props} />;
    const SermonLink = props => <Link to='/sermons' {...props} />
    const EventLink = props => <Link to='/events' {...props} />

    return (
      <HashRouter>
        <Route render={({location}) => (
        <div className="wrapper">
          <nav id="navBar">
            <Button component={HomeLink}>Home</Button>
            <Button component={AboutLink}>About</Button>
            <Button component={ContactLink}>Visit Us</Button>
            <Button component={StatementLink}>Beliefs</Button>
            <Button id="hide" component={SermonLink}>Sermons</Button>
            {/* <Button component={EventLink}>Events</Button> */}
            
            
          </nav>
          <div className="content" />
          <TransitionGroup>
          <CSSTransition key={location.key} classNames="fade" timeout={300}>
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
      </HashRouter>
    );
  }
}

export default App;
