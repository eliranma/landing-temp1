import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {IconButton} from '@material-ui/core';
import ImageCard from './imageCard';
import services from '../data/services';
import useWindowPosition from '../hook/useWindowPosition';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import {Link as Scroll} from 'react-scroll';


const useStyles = makeStyles((theme)=> ({
root: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent:'center',
    alignItems:'center',
    background: `url(${process.env.PUBLIC_URL + '/assets/services-bg.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition:'top',
    backgroundSize: 'cover',
    padding:'50px, 50px',

},
cards:  {
    display:'flex',
    flexDirection: 'row',
    paddingTop: '10vh'
    },
card: {
    maxHeight: '50vh',
},
downIcon: {
    color: '#000',
    // color: '#E5E5E5',
    // backgroundColor:'#fff',
    // borderRadius:'50%',
    fontSize:'4rem',
},

}));

export default () =>{
const classes = useStyles();
const checked = useWindowPosition('header');
return (
    <div className={classes.root}
        id='services'>
    <div className={classes.cards}>
    <ImageCard
     service= {services[0]}
     className={classes.card}
     checked={checked}
     />
    <ImageCard
    service= {services[1]}
    className={classes.card}
    checked={checked}/>
    </div>
    <Scroll to='form'
            smooth={true}
            >
    <IconButton className={classes.iconContainer}>
        <ArrowDownwardIcon className={classes.downIcon}/>
    </IconButton>
    </Scroll>

    </div>
)
}