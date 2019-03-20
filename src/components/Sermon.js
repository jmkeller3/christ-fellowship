import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Replay5 from '@material-ui/icons/Replay5';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Forward5 from '@material-ui/icons/Forward5';
import Pause from '@material-ui/icons/Pause';
import imageURL from '../img/Logo.svg'

const styles = theme => ({
  card: {
    display: 'flex',
    minWidth: '310px',
    maxWidth: '350px',
    margin: 'auto'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
    height: 165,
    marginLeft: 'auto'
    
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  playIcon: {
    height: 40,
    width: 40,
  },
  timeIcon: {
    height: 30,
    width: 30
  }
});

class Sermon extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      playStatus: false
    }
  }

  handlePlay = () => {
    
    if (!this.state.playStatus) {
      this.setState({playStatus: true})
      console.log('Playing...')
      // audio.play()
    } else {
      this.setState({playStatus: false})
      console.log('Pausing...')
      // audio.pause()
    }
    
    }

  render() {

  const { classes, theme } = this.props;
  return (
    <Card className={classes.card}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {this.props.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {this.props.preacher}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <IconButton aria-label="Previous">
            {theme.direction === 'rtl' ? <Forward5 className={classes.timeIcon} /> : <Replay5 className={classes.timeIcon} />}
          </IconButton>
          <IconButton aria-label="Play/pause">
            {this.state.playStatus ? <Pause className={classes.playIcon} onClick={this.handlePlay} /> :
            <PlayArrowIcon className={classes.playIcon} onClick={this.handlePlay} />}
          </IconButton>
          <IconButton aria-label="Next">
            {theme.direction === 'rtl' ? <Replay5 className={classes.timeIcon} /> : <Forward5 className={classes.timeIcon} />}
          </IconButton>
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        image={imageURL}
        title="Church Logo"
      />
    </Card>
  );
}
}


Sermon.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Sermon);