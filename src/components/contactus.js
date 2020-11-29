import React from 'react';
import {TextField, IconButton} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import useWindowPosition from '../hook/useWindowPosition';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme)=>({
    root:   {
        height: '100vh',
        background: '#fff',
        display: 'flex',
        flexDirection:'column',
        justifyItems:'center',
        alignItems:'center',
        justifyContent:'center',
        textAlign:"right"
    }
}));
export default () =>{
    const classes = useStyles();
    const checked = useWindowPosition('services');
    return (
    <form id='form'
    className={classes.root}
    noValidate
    autoComplete="off">
  <TextField id="standard-basic" label="שם מלא:" required />
  <TextField id="filled-basic" label="מספר טלפון:" required />
  <TextField id="outlined-basic" label="Email:" required />
  <IconButton className={classes.iconContainer}>
        <SendIcon className={classes.submit} />
    </IconButton>
    </form>
    )
}