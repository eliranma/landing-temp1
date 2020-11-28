import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ImageCard from './imageCard';
import services from '../data/services';
import useWindowPosition from '../hook/useWindowPosition';


const useStyles = makeStyles((theme)=> ({
root: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center'
},
card: {
    maxHeight: '50vh',

}
}));

export default () =>{
const classes = useStyles();
const checked = useWindowPosition('header');
return (
    <div className={classes.root}>
    <ImageCard
     service= {services[0]}
     className={classes.card}/>
    <ImageCard
    service= {services[1]}
    className={classes.card}/>

    </div>
)
}