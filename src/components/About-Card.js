import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Tabs,
  Tab,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button
} from "@material-ui/core";
import Tim from "../img/Tim.jpg";
import Zach from "../img/Zach.jpeg";
import './About.css'
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
    maxWidth: 600,
    minWidth: 200,
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    justifyContent: 'center',
    alignItems: 'center',
    transitionDuration: "0.5s",
    "&:hover": {
      boxShadow: `3px 3px 3px 2px rgba(0,0,0,0.5);`
    }
  },
  header: {
    margin: "auto",
    marginTop: 10,
    marginBotton: 15
  },
  padding: {
    padding: 5
  },
  circle: {
    borderRadius: '50%'
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
            <Card id="abt-church" className={classes.card}>
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
                <br />
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
            <Card id="abt-elders" className={classes.card}>
              <CardContent>
                <Typography
                  className={classes.header}
                  component="h4"
                  variant="h4"
                >
                  Leadership
                </Typography>
                <div className="elder">
                <Typography
                  className={classes.header}
                  component="h5"
                  variant="h5"
                >
                  Timothy O'Day
                </Typography>
              
              <div className="img-container">
                <img className={classes.circle} src={Tim} alt="A portrait of Timothy O'Day" />
              </div>
              <Typography className={classes.padding} component="p">
                Timothy is husband to Haley, father to Julia and Elias, and
                serves as a pastor of Christ Fellowship Church. He received a BA
                in Biblical Studies and Biblical Languages from Union University
                in 2010, an M.Div from The Southern Baptist Theological Seminary
                in 2016, and served as a pastoral apprentice at Cornerstone
                Community Church in Jackson, TN. He enjoys spending time with
                his family, running, biking, reading, and connecting truth to
                everyday life. You can connect with him by phone, email, or
                twitter.
              </Typography>
              <Typography className={classes.padding} component="p">Phone: (801) 831-4242</Typography >
              <Typography className={classes.padding} component="p">Email: Timothy@christfellowshipUtah.org</Typography>
            </div>
            <div className="elder">
            <Typography
                  className={classes.header}
                  component="h5"
                  variant="h5"
                >
                  Zach Thompson
                </Typography>
              <div className="img-container">
                <img className={classes.circle} src={Zach} alt="A portrait of Zach Thompson" />
              </div>
              <p>
                Zach is married to Courtney and has two daughters, Lana and
                Hope. After graduating from Union University with a Bachelor of
                Arts in History and Biblical Languages, he participated in a
                pastoral training and education program in West Tennessee. He
                now owns and operates a remodeling company based in American
                Fork, Utah.
              </p>
              <p>Phone: (931) 670-2178</p>
              <p>Email: zach@christfellowshipUtah.org</p>
            </div>
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
                  Location
                </Typography>
                <Typography className={classes.padding} component="p">
                Lehi is in great need of gospel proclamation and gospel presence,
              which is why our vision is to start a gospel movement in northern
              Utah County, not just a single local church. Our desire is to
              start this movement by spreading the gospel broadly and
              consistently, to see a church come into existence through
              evangelism, and to raise up leaders to the end that more churches
              come into existence. With only 1 evangelical church for every
              20,300 people in the metro, this area is not simply in need of one
              new church community but many, which will only come with deep
              gospel saturation.
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
                  Service
                </Typography>
                <Typography className={classes.padding} component="p">
                Our meeting time consists of hearing from God and responding to
              him. We do this by...
                </Typography>
                <Typography className={classes.padding} component="p">
                <span className="strong">READING OF SCRIPTURE</span>: The Bible
                is not only the foundation for what we do, but the very content
                of our time together. In gathering with us, expect to read the
                Bible, pray in response to what we hear from it, sing songs that
                are biblically grounded, hear the Word preached, and respond to
                what we hear from Scripture with faithful obedience.
                </Typography>
                <Typography className={classes.padding} component="p">
                <span className="strong">COMMUNITY PRAYER</span>: We take time
                each week to devote ourselves to prayer. We focus in as a
                community on one issue, person, etc. to make the focus of our
                prayer as a community.
                </Typography>
                <Typography className={classes.padding} component="p">
                <span className="strong">SINGING</span>: We sing old songs and
                new songs, hymns and choruses. Our aim is to ensure that they
                are theologically true to Scripture, raise our affections to
                God, and help our minds meditate on truth.
                </Typography><Typography className={classes.padding} component="p">
                <span className="strong">PREACHING</span>: Our preaching is
                driven by the following convictions:
                <ol>
                  <li>
                    <span className="italics">
                      We believe the Bible is the holy, inspired, and
                      inerrant Word of God.
                    </span>
                    <br />
                    <br />
                    Therefore, we seek in our preaching simply to proclaim God’s
                    Word after Him. Due to this, we preach expositionally,
                    seeking to make the points, claims, or main statements of
                    the sermon align themselves with those points, claims, and
                    statements which the text itself communicates.
                  </li>
                  <li>
                    <span className="italics">
                      We believe the whole counsel of God should be preached.
                    </span>
                    <br />
                    <br />
                    We preach through books of the Bible so that all of the
                    Bible can be examined, not skipping portions that seem
                    difficult.
                  </li>
                  <li>
                    <span className="italics">
                      We strive to proclaim the gospel in all that we do.
                    </span>
                    <br />
                    <br />
                    Jesus says that all of Scripture points to Him (John 5:39).
                    In Jesus we find eternal life, not simply in knowing our
                    Bibles. Therefore, in all we do we connect how the Bible
                    points us to Jesus and the life we have through Him and His
                    gospel.
                  </li>
                </ol>
                </Typography>
                <CardActions>
                <Button
              variant="contained"
              color="primary"
              size="large"
              href="/contact"
              style={{
                maxWidth: 250,
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: 20
              }}
            >
              Meeting Times
            </Button>
                </CardActions>
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
                A statement of faith is a summary of Christian beliefs meant to
              answer basic questions of the faith, such as "What is God like?"
              "Who is man?" "Who is Christ?" "What is the Bible?"
                </Typography>
                <Typography className={classes.padding} component="p">
                Everyone has his or her statement of faith, even if one does not
              call it that. A statement from a whole church is meant to unify
              believers around the truths of Scripture. It is a document meant
              to guard the church from error. All the teaching of Christ
              Fellowship Church should be in accordance with this statment of
              faith as it is a clear summary of what is revealed in Scripture.
                </Typography>
                <Typography className={classes.padding} component="p">
                You can access and read Christ Fellowship's statement of faith by
              clicking the button below. It uses the categories of the New
              Hampshire Baptist Confession (1833) with the language of the
              Baptist Faith and Message (2000). Our statement has adopted newer
              language to speak directly to current issues of our day.
                </Typography>
                <CardActions>
                <Button
              variant="contained"
              color="primary"
              size="large"
              href="/statement"
              style={{
                maxWidth: 250,
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: 20
              }}
            >
              Statement of Faith
            </Button>
                </CardActions>
              </CardContent>
            </Card>
          </TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(AboutCard);
