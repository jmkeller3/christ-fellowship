import React from "react";
import {
  Card,
  CardContent,
  Typography,
  withStyles,
  Divider,
  IconButton,
  CardActions,
  Collapse
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import classnames from "classnames";
import "./Statement.css";

const styles = theme => ({
  card: {
    maxWidth: 500,
    marginBottom: 10,
    marginTop: 10,
    display: "flex",
    flexDirection: "column"
  },
  arrow: {
    padding: 0
  },
  header: {
    margin: "auto",
    marginTop: 10
  },
  spacer: {
    marginTop: 7,
    marginBottom: 7
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    margin: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  }
});

class Statement extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;
    return (
      <main id="statementoffaith">
        <div id="statement">
          <Card className={classes.card}>
            <Typography className={classes.header} component="h4" variant="h4">
              Introduction
            </Typography>
            <CardActions className={classes.actions} disableActionSpacing>
              <IconButton
                className={classnames(classes.expand, {
                  [classes.expandOpen]: this.state.expanded
                })}
                onClick={this.handleExpandClick}
                aria-expanded={this.state.expanded}
                aria-label="Show more"
              >
                <ExpandMoreIcon className={classes.arrow} />
              </IconButton>
            </CardActions>
            <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography component="p">
                  The statement of faith that follows is designed to set forth
                  the primary doctrines of our faith. It is not an exhaustive
                  account of our beliefs. The Bible itself, as the inspired and
                  infallible Word of God that speaks with final authority
                  concerning truth, morality, and the proper conduct of mankind,
                  is the final and supremely authoritative source of all that we
                  believe. For purposes of Christ Fellowship Church’s practice,
                  policies, and discipline, the elders of the church, under the
                  authority of the whole congregation, are Christ Fellowship
                  Church’s final human interpretive authority on the Bible’s
                  meaning and application within the guidelines of the statement
                  of faith.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
          <Card className={classes.card}>
            <Typography className={classes.header} component="h4" variant="h4">
              The Scriptures
            </Typography>
            <CardActions className={classes.actions} disableActionSpacing>
              <IconButton
                className={classnames(classes.expand, {
                  [classes.expandOpen]: this.state.expanded
                })}
                onClick={this.handleExpandClick}
                aria-expanded={this.state.expanded}
                aria-label="Show more"
              >
                <ExpandMoreIcon className={classes.arrow} />
              </IconButton>
            </CardActions>
            <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography component="p">
                  The 66 books of the Old and New Testaments, commonly known as
                  the Holy Bible, are the Word of God, given by the inspiration
                  of God and are the only sufficient, certain, and authoritative
                  rule of all saving knowledge, faith, and practice. The Holy
                  Bible was written by men divinely inspired and is God's
                  revelation of Himself to man. It is a perfect treasure of
                  divine instruction. It has God for its author, salvation for
                  its end, and truth, without any mixture of error, for its
                  matter. Therefore, all Scripture is totally true and
                  trustworthy. It reveals the principles by which God judges us;
                  and therefore is, and will remain to the end of the world, the
                  true center of Christian union, and the supreme standard by
                  which all human conduct, creeds, and religious opinions should
                  be tried. All Scripture is a testimony to Christ, who is
                  Himself the focus of divine revelation.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
          <Card className={classes.card}>
            <Typography className={classes.header} component="h4" variant="h4">
              God
            </Typography>
            <CardActions className={classes.actions} disableActionSpacing>
              <IconButton
                className={classnames(classes.expand, {
                  [classes.expandOpen]: this.state.expanded
                })}
                onClick={this.handleExpandClick}
                aria-expanded={this.state.expanded}
                aria-label="Show more"
              >
                <ExpandMoreIcon className={classes.arrow} />
              </IconButton>
            </CardActions>
            <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography component="p">
                  There is one and only one living and true God. He is an
                  intelligent, spiritual, and personal Being, the Creator,
                  Redeemer, Preserver, and Ruler of the universe. God is
                  infinite in holiness and all other perfections. God is
                  all-powerful and all-knowing; and His perfect knowledge
                  extends to all things – past, present, and future – including
                  the future decisions of His free creatures. To Him we owe the
                  highest love, reverence, and obedience. The eternal triune God
                  has always, and will always, exist as Father, Son, and Holy
                  Spirit, with distinct personal relations, but without division
                  of nature, essence, or being.
                </Typography>
                <Divider className={classes.spacer} />
                <Typography
                  className={classes.header}
                  component="h5"
                  variant="h5"
                  color="textSecondary"
                >
                  God the Father
                </Typography>
                <Typography component="p">
                  God as Father reigns with providential care over His universe,
                  His creatures, and human history according to the purposes of
                  His grace. He is all-powerful, all-knowing, all-loving, and
                  all wise. He is, from eternity, the Father of the Son, and
                  through his redemptive plan becomes Father in truth to those
                  who become children of God through faith in Jesus Christ.
                </Typography>
                <Divider className={classes.spacer} />
                <Typography
                  className={classes.header}
                  component="h5"
                  variant="h5"
                  color="textSecondary"
                >
                  God the Son
                </Typography>
                <Typography component="p">
                  Christ is the eternal Son of God. In His incarnation as Jesus
                  Christ He was conceived of the Holy Spirit and born of the
                  virgin Mary. Jesus perfectly revealed and did the will of God,
                  taking upon Himself human nature with its demands and
                  necessities and identifying Himself completely with mankind,
                  yet without sin. He honored the divine law by His personal
                  obedience, and in His substitutionary death on the cross He
                  atoned for the sin of all who will believe. He was raised from
                  the dead with a glorified body and appeared to His disciples
                  as the person who was with them before His crucifixion. He
                  ascended into heaven and is now exalted at the right hand of
                  God where He is the One Mediator – fully God, fully man – in
                  whose Person is effected the reconciliation between God and
                  man. He will return in power and glory to judge the world and
                  to consummate His redemptive mission. He now dwells in all
                  believers as the living and ever present Lord.
                </Typography>
                <Divider className={classes.spacer} />
                <Typography
                  className={classes.header}
                  component="h5"
                  variant="h5"
                  color="textSecondary"
                >
                  God the Holy Spirit
                </Typography>
                <Typography component="p">
                  The Holy Spirit is the Spirit of God, fully divine. He
                  inspired holy men of old to write the Scriptures. Through
                  illumination He enables men to understand truth. He exalts
                  Christ. He convicts men of sin, of righteousness, and of
                  judgment. He calls men to the Savior, and effects
                  regeneration. He cultivates Christian character, comforts
                  believers, and bestows the spiritual gifts by which they serve
                  God through His church. He seals the believer unto the day of
                  final redemption. His presence in the Christian is the
                  guarantee that God will bring the believer into the fullness
                  of the stature of Christ. He enlightens and empowers the
                  believer and the church in worship, evangelism, and service.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
          <Card className={classes.card}>
            <Typography className={classes.header} component="h4" variant="h4">
              Humanity
            </Typography>
            <CardActions className={classes.actions} disableActionSpacing>
              <IconButton
                className={classnames(classes.expand, {
                  [classes.expandOpen]: this.state.expanded
                })}
                onClick={this.handleExpandClick}
                aria-expanded={this.state.expanded}
                aria-label="Show more"
              >
                <ExpandMoreIcon className={classes.arrow} />
              </IconButton>
            </CardActions>
            <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography component="p">
                  Salvation involves the redemption of the whole man, and is
                  applied to all who repent of their sins and believe in Jesus
                  Christ as Lord and Savior, who by His own blood obtained
                  eternal redemption for the believer. In its broadest sense
                  salvation includes regeneration, justification,
                  sanctification, and glorification. There is no salvation apart
                  from personal faith in Jesus Christ as Lord.
                </Typography>
                <Divider className={classes.spacer} />
                <Typography
                  className={classes.header}
                  component="h5"
                  variant="h5"
                  color="textSecondary"
                >
                  Regeneration
                </Typography>
                <Typography component="p">
                  Regeneration, or the new birth, is a work of God's grace
                  whereby believers become new creatures in Christ Jesus. It is
                  a change of heart wrought by the Holy Spirit through
                  conviction of sin, to which the sinner responds in repentance
                  toward God and faith in the Lord Jesus Christ. Repentance and
                  faith are inseparable experiences of grace. Repentance is a
                  genuine turning from sin toward God. Faith is the acceptance
                  of Jesus Christ and commitment of the entire personality to
                  Him as Lord and Savior.
                </Typography>
                <Divider className={classes.spacer} />
                <Typography
                  className={classes.header}
                  component="h5"
                  variant="h5"
                  color="textSecondary"
                >
                  Justification
                </Typography>
                <Typography component="p">
                  Justification is God's gracious and full acquittal upon
                  principles of His righteousness of all sinners who repent and
                  believe in Christ. It includes the pardon of sin and the
                  promise of eternal life, which are not bestowed because of any
                  righteous works which the believer has done but solely through
                  faith by which Christ’s perfect righteousness is freely
                  imputed to the believer by God. Justification brings the
                  believer into a relationship of peace and favor with God.
                </Typography>
                <Divider className={classes.spacer} />
                <Typography
                  className={classes.header}
                  component="h5"
                  variant="h5"
                  color="textSecondary"
                >
                  Sanctification
                </Typography>
                <Typography component="p">
                  Sanctification is the experience, beginning in regeneration,
                  by which the believer is set apart to God's purposes, and is
                  enabled to progress toward moral and spiritual maturity
                  through the presence and power of the Holy Spirit dwelling in
                  him. Growth in grace should continue throughout the regenerate
                  person's life.
                </Typography>
                <Divider className={classes.spacer} />
                <Typography
                  className={classes.header}
                  component="h5"
                  variant="h5"
                  color="textSecondary"
                >
                  Glorification
                </Typography>
                <Typography component="p">
                  Glorification is the culmination of salvation and is the final
                  blessed and abiding state of the redeemed. At the point of
                  glorification, being achieved only after this life, the
                  believer will be perfectly righteous, like his Lord. Thus, he
                  will dwell with his Creator and Lord for all eternity.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
          <Card className={classes.card}>
            <Typography className={classes.header} component="h4" variant="h4">
              Salvation
            </Typography>
            <CardActions className={classes.actions} disableActionSpacing>
              <IconButton
                className={classnames(classes.expand, {
                  [classes.expandOpen]: this.state.expanded
                })}
                onClick={this.handleExpandClick}
                aria-expanded={this.state.expanded}
                aria-label="Show more"
              >
                <ExpandMoreIcon className={classes.arrow} />
              </IconButton>
            </CardActions>
            <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography component="p">
                  Man is the special creation of God, made in His own image. He
                  created them male and female as the crowning work of His
                  creation. The gift of gender, which cannot be severed from
                  biological sex, is thus part of the goodness of God's
                  creation. Therefore, rejection of one’s biological sex
                  constitutes a rejection of God’s design for one’s good.
                  Marriage is the uniting of one man and one woman in covenant
                  commitment for a lifetime. It is God's unique gift to reveal
                  the union between Christ and his church and to provide the man
                  and the woman in marriage the framework for intimate
                  companionship, the channel of sexual expression according to
                  biblical standards, and the means for procreation of the human
                  race. Any sexual activity outside of the bond of marriage as
                  defined above is a rejection of God’s good and gracious gifts
                  to his creation and is thus regarded as sinful.
                </Typography>
                <Divider className={classes.spacer} />
                <Typography component="p">
                  In the beginning man was innocent of sin and was endowed by
                  his Creator with freedom of choice. By his free choice man
                  sinned against God and brought sin into the human race.
                  Through the temptation of Satan man transgressed the command
                  of God, and fell from his original innocence whereby all born
                  from Adam inherit an utterly sinful nature. Only the grace of
                  God can bring man into His holy fellowship and enable man to
                  fulfill the creative purpose of God. The sanctity of human
                  life is evident in the fact that God created man in His own
                  image; therefore, every person of every race and age (from
                  conception to death) possesses full dignity and is worthy of
                  respect and Christian love.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
          <Card className={classes.card}>
            <Typography className={classes.header} component="h4" variant="h4">
              God's Purpose of Grace
            </Typography>
            <CardActions className={classes.actions} disableActionSpacing>
              <IconButton
                className={classnames(classes.expand, {
                  [classes.expandOpen]: this.state.expanded
                })}
                onClick={this.handleExpandClick}
                aria-expanded={this.state.expanded}
                aria-label="Show more"
              >
                <ExpandMoreIcon className={classes.arrow} />
              </IconButton>
            </CardActions>
            <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography component="p">
                  Election is the gracious purpose of God, according to which He
                  regenerates, justifies, sanctifies, and glorifies sinners. It
                  is consistent with the free agency of man, and comprehends all
                  the means in connection with the end. It is the glorious
                  display of God's sovereign goodness, and is infinitely wise,
                  holy, and unchangeable. It excludes boasting and promotes
                  humility. All true believers endure to the end. Those whom God
                  has accepted in Christ, and sanctified by His Spirit, will
                  never fall away from the state of grace, but shall persevere
                  to the end. Believers may fall into sin through neglect and
                  temptation, whereby they grieve the Spirit, impair their
                  graces and comforts, and bring reproach on the cause of Christ
                  and temporal judgments on themselves; yet they shall be kept
                  by the power of God through faith unto salvation. Those who
                  profess faith but do not persevere, thereby show themselves to
                  be unregenerate.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
          <Card className={classes.card}>
            <Typography className={classes.header} component="h4" variant="h4">
              The Church
            </Typography>
            <CardActions className={classes.actions} disableActionSpacing>
              <IconButton
                className={classnames(classes.expand, {
                  [classes.expandOpen]: this.state.expanded
                })}
                onClick={this.handleExpandClick}
                aria-expanded={this.state.expanded}
                aria-label="Show more"
              >
                <ExpandMoreIcon className={classes.arrow} />
              </IconButton>
            </CardActions>
            <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography component="p">
                  A New Testament church of the Lord Jesus Christ is an
                  autonomous local congregation of baptized believers,
                  associated by covenant in the faith and fellowship of the
                  gospel; observing the two ordinances of Christ, governed by
                  His laws, exercising the gifts, rights, and privileges
                  invested in them by His Word, and seeking to extend the gospel
                  to the ends of the earth. Its scriptural officers are elders
                  and deacons. While both men and women are gifted for service
                  in the church, the office of elder is limited to men as
                  qualified by Scripture. The New Testament speaks also of the
                  church as the Body of Christ which includes all of the
                  redeemed of all the ages, believers from every tribe, and
                  tongue, and people, and nation.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
          <Card className={classes.card}>
            <Typography className={classes.header} component="h4" variant="h4">
              Baptism and Lord's Supper
            </Typography>
            <CardActions className={classes.actions} disableActionSpacing>
              <IconButton
                className={classnames(classes.expand, {
                  [classes.expandOpen]: this.state.expanded
                })}
                onClick={this.handleExpandClick}
                aria-expanded={this.state.expanded}
                aria-label="Show more"
              >
                <ExpandMoreIcon className={classes.arrow} />
              </IconButton>
            </CardActions>
            <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography component="p">
                  Christian baptism, being the believer’s profession of faith,
                  is an act of obedience symbolizing the believer's faith in a
                  crucified, buried, and risen Savior, the believer's cleansing
                  from sin and death to sin, the burial of the old life, and the
                  resurrection to walk in newness of life in Christ Jesus. It is
                  to be done by immersion in water in the name of the Father,
                  the Son, and the Holy Spirit. Being a church ordinance, it is
                  prerequisite to the privileges of church membership. The
                  Lord's Supper is a symbolic act of obedience whereby members
                  of the church, through partaking of the bread and the cup,
                  remember the death of the Redeemer and anticipate His second
                  coming.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
          <Card className={classes.card}>
            <Typography className={classes.header} component="h4" variant="h4">
              Last Things
            </Typography>
            <CardActions className={classes.actions} disableActionSpacing>
              <IconButton
                className={classnames(classes.expand, {
                  [classes.expandOpen]: this.state.expanded
                })}
                onClick={this.handleExpandClick}
                aria-expanded={this.state.expanded}
                aria-label="Show more"
              >
                <ExpandMoreIcon className={classes.arrow} />
              </IconButton>
            </CardActions>
            <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography component="p">
                  God, in His own time and in His own way, will bring the world
                  to its appropriate end. According to His promise, Jesus Christ
                  will return personally and visibly in glory to the earth; the
                  dead will be raised; and Christ will judge all men in
                  righteousness. The unrighteous will be consigned to Hell, the
                  place of everlasting punishment. The righteous in their
                  resurrected and glorified bodies will receive their reward and
                  will dwell forever in Heaven with the Lord.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </div>
      </main>
    );
  }
}

export default withStyles(styles)(Statement);
