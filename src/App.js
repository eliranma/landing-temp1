import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {CssBaseline} from '@material-ui/core';
import Header from './components/Header';
import ServicesToSupply from './components/ServicesToSupply';
import ContactUs from './components/contactus';


const useStyles = makeStyles((theme)=>({
  root: {
    minHeight: '100vh',
    // backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg.jpg'} )`,
    background: 'rgb(255,255,255)',
    background: 'linear-gradient(150deg, rgba(255,255,255,1) 0%, rgba(56,74,74,1) 50%, rgba(23,17,4,1) 100%)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition:'top',
    [theme.breakpoints.down('md')]:{
      backgroundSize:'cover'
  }
  }
}));
export default function App(){
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <CssBaseline />
    <Header />
    <ServicesToSupply />
    <ContactUs />
    </div>
  )
}