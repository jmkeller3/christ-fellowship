import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Tabs,
  Tab,
  Typography,
  Card,
  CardContent,
  CardActions
} from "@material-ui/core";

import classnames from "classnames";
import SwipeableViews from "react-swipeable-views";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  card: {
    maxWidth: 500,
    minWidth: 300,

    display: "flex",
    flexDirection: "column",
    margin: "auto",
    transitionDuration: "0.5s",
    "&:hover": {
      boxShadow: `5px 5px 5px 2px rgba(0,0,0,0.75);`
    }
  },
  header: {
    margin: "auto",
    marginTop: 10
  }
});

export class AboutCard extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root} id="about">
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            variant="scrollable"
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab label="Church" />
            <Tab label="Leadership" />
            <Tab label="Location" />
            <Tab label="Service" />
            <Tab label="Statement of Faith" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
            <Card className={classes.card}>
              <CardContent>
                <Typography
                  className={classes.header}
                  component="h4"
                  variant="h4"
                >
                  Christ Fellowship
                </Typography>
                <Typography className={classes.padding} component="p">
                  Christ Fellowship is a recently established church is Lehi,
                  UT. Our deisre is to live in light of the love of God
                  displayed for us in the gospel of Jesus Christ. We say with
                  the apostle Paul:
                </Typography>
                <Typography className={classes.padding} component="p">
                  &#8220;For the love of Christ controls us, because we have
                  concluded this: That one has died for all, therefore all have
                  died; and he died for all, that those who live might no longer
                  live for themselves but for him, who for their sake died and
                  was raised&#8221; &#8212; II Corinthains 5:14-15
                </Typography>
              </CardContent>
            </Card>
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <Card className={classes.card}>
              <CardContent>
                <Typography
                  className={classes.header}
                  component="h4"
                  variant="h4"
                >
                  Statement of Faith
                </Typography>
                <Typography className={classes.padding} component="p">
                  Christ Fellowship is a recently established church is Lehi,
                  UT. Our deisre is to live in light of the love of God
                  displayed for us in the gospel of Jesus Christ. We say with
                  the apostle Paul, "For the love of Christ controls us, because
                  we have concluded this:
                </Typography>
                <Typography className={classes.padding} component="p">
                  &#8220;That one has died for all, therefore all have died; and
                  he died for all, that those who live might no longer live for
                  themselves but for him, who for their sake died and was
                  raised&#8221; &#8212; II Corinthains 5:14-15
                </Typography>
              </CardContent>
            </Card>
          </TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

export default withStyles(styles)(AboutCard);
