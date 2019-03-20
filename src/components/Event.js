import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';


import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import imageURL from '../img/Logo.svg'

const styles = {
    card: {
        minWidth: 300,
        maxWidth: 500,
        marginTop: 10,
        marginBottom: 10,
    },
    media: {
      height: 240,
    },
  };

function Event(props) {
    const { classes } = props;
    return (
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={imageURL}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography  variant="h4" gutterBottom align="center" component="h4">
              {props.title}
            </Typography>
            <Typography variant="h5" gutterBottom color="textSecondary" component="h5">
                {props.date}
            </Typography>
            <Typography component="p">
              {props.details}
            </Typography>
          </CardContent>
        
      </Card>
  )
}

export default withStyles(styles)(Event);