import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {CssBaseline} from '@material-ui/core';
import Header from './components/Header';
import ServicesToSupply from './components/ServicesToSupply';
import Form from './components/contactus';


const useStyles = makeStyles((theme)=>({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg.jpg'} )`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition:'top'
  }
}));
export default function App(){
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <CssBaseline />
    <Header />
    <ServicesToSupply />
    <Form />
    </div>
  )
}