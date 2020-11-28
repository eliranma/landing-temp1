import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    fontFamily: 'Nunito',
    background: 'rgba(0,0,0,0.5)',
    margin: '20px'
    },
  title: {
    fontWeight: 'bold',
    fontSize: '2rem',
    color: '#fff'
    },
  content: {
    color: '#fff'
  },
  media: {

  },
});

export default function ImageCard({service}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={service.imageUrl}
          title="Contemplative Reptile"
          className={classes.media}
        />
        <CardContent className={classes.card}>
          <Typography gutterBottom
           variant="h5"
           component="h2"
           className={classes.title}
           >
            {service.title}
          </Typography>
          <Typography variant="body2"
          color="textSecondary"
          component="p"
          className={classes.content}>
            {service.content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary">
          Share
        </Button> */}
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
