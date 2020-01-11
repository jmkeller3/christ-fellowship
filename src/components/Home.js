import React, { Component } from "react";
import Logo from "../img/Logo.svg";
import Button from "@material-ui/core/Button";
import BG from "../img/Prayer.jpg";
import { withStyles } from "@material-ui/core/styles";
import {Link} from 'react-router-dom';
import "./Home.css";


// Themes for material-ui components
const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end"
  },
  icon: {
    margin: theme.spacing.unit * 2
  },
  iconHover: {
    margin: theme.spacing.unit * 2,
    "&:hover": {
      color: "#44a187"
    }
  }
});



export class Home extends Component {
  
  render() {
    const StatementLink = props => <Link to="/statement" {...props} />;
    const VisitLink = props => <Link to="/contact" {...props} />;
    // const SermonLink = props => <Link to="/sermons" {...props} />;
    const EventLink = props => <Link to="/events" {...props} />;

    return (
      <main id="home">
        <section
          style={{
            backgroundImage: `url(${BG})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            opacity: 0.8
          }}
          id="hero"
        >
        <div className="hero-container">
          <img src={Logo} alt="Christ Fellowship Church Logo" />
          </div>
        </section>
        <section className="info" id="gathering-info">
          <h3>Weekly Gathering</h3>
          <p>
            We gather every Sunday to celebrate the resurrection of Jesus and
            the life that we have through the gospel. Click below for more
            infomation.
          </p>
          <Button
            variant="contained"
            color="primary"
            size="large"
            component={VisitLink}
          >
            Weekly Gathering
          </Button>
        </section>
        <section className="info" id="mission-info">
          <h3>Mission Statement</h3>
          <p>
            Our purpose is to glorify God by multiplying, gathering, and
            equipping disciples of Jesus Christ through the power of the Holy
            Spirit.
          </p>
          <Button
            variant="contained"
            color="primary"
            size="large"
            component={StatementLink}
          >
            More Information
          </Button>
        </section>
        {/* <section className="info" id="sermon-info">
          <h3>Latest Sermon</h3>
          <p>
            We strive to preach expositionally through the whole console of God's Word. You can hear our last sermon by clicking the link below.
          </p>
          <Button
            variant="contained"
            color="primary"
            size="large"
            component={SermonLink}
          >
            Listen to Sermon
          </Button>
        </section> */}
        <section className="info" id="sermon-info">
          <h3>Coming Events</h3>
          <p>
            We host free camps, cookouts, and other communuity activities throughout the year. Click below to see what is ahead.
          </p>
          <Button
            variant="contained"
            color="primary"
            size="large"
            component={EventLink}
          >
            Coming Events
          </Button>
        </section>
        <section className="info" id="giving-info">
          <h3>Giving</h3>
          <p>
            If you want to support our ministry, you can give when we gather
            together every Sunday or online through the link below.
          </p>
          <Button
            variant="contained"
            color="secondary"
            href="https://tithe.ly/give_new/www/#/tithely/give-one-time/567613"
            target="_blank"
            size="large"
          >
            Give
          </Button>
        </section>
      </main>
    );
  }
}

export default withStyles(styles)(Home);
