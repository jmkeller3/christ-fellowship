import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import imageURL from '../img/Camp2.jpeg'
import { CardActions } from '@material-ui/core'

const styles = {
  card: {
    minWidth: 300,
    maxWidth: 500,
    marginTop: 10,
    marginBottom: 10,
  },
  media: {
    height: 200,
    padding: '8px',
  },
}

function Event(props) {
  const { classes } = props
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={imageURL} title='Kids Camp' />
      <CardContent>
        <Typography variant='h4' gutterBottom align='center' component='h4'>
          {props.title}
        </Typography>
        <Typography
          variant='h5'
          gutterBottom
          color='textSecondary'
          component='h5'
        >
          {props.date}
        </Typography>
        <Typography component='p'>{props.details}</Typography>
        <br />
        <CardActions>
          <Button
            size='small'
            color='primary'
            variant='contained'
            target='_blank'
            href={props.link}
            style={{ margin: 'auto' }}
          >
            More details Here
          </Button>
          {/* Registration for camp */}
          <Button
            size='small'
            color='primary'
            variant='contained'
            target='_blank'
            href='https://docs.google.com/forms/d/e/1FAIpQLSdAzwBYEJ3xKggACFm9boCG0bg_boPWmaIfe1ruFfIPI3kd3g/viewform '
            style={{ margin: 'auto' }}
          >
            Register Here
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  )
}

export default withStyles(styles)(Event)
