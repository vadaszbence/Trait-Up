import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: '0 20px',
    height: 500,

  },
  media: {
    height: 250,
  },
  title: {
    marginBottom: 20,  
  }
});

export default function JobSearchFeature() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography className={classes.title} align="center" gutterBottom variant="h5" component="h3">
            Search for tech jobs all around the world
          </Typography>
          <Typography align="center" variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
    </Card>
  );
}
