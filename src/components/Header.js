import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {AppBar, Collapse, IconButton, Toolbar} from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const useStyles = makeStyles((theme)=>({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'nunito',
        height: '100vh'
    },
    appbar: {
        background: 'none',
    },
    icon: {
        color: '#fff',
        fontSize: '2rem'
    },
    appbarTitle: {
        flexGrow: '1'
    },
    appbarWrapper: {
        width: '80%',
        margin: '0, auto'
    },
    colorText:{
        color: '#F2F3F3'
    },
    title: {
        color: '#fff',
        fontSize:'3rem',
        opacity:'1',
        paddingBottom: '20vh'
    },
    titleContainer:{
        textAlign: 'center',

    },
    downIcon: {
        color: '#000',
        fontSize:'4rem',

    }
}));
export default function Header(){
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    useEffect(()=>{
        setChecked(true)
    }, []);
    return (
        <div className={classes.root}
            id= 'header'>
            <AppBar className = {classes.appbar}>
                <Toolbar className = {classes.appbarWrapper}>
                <h1 className = {classes.appbarTitle}>
                    Landing<span className={classes.colorText}> Page</span> Template 1
                    </h1>
                <IconButton>
                  <SortIcon className = {classes.icon}/>
                </IconButton>
                </Toolbar>
            </AppBar>
            <Collapse in={checked} {...(checked ? {timeout:1000}:{})} collapsedHeight={50}>
            <div className={classes.titleContainer}>
                <h1 className={classes.title}>
                    Welcome To <br /> Our Family
                </h1>
                <IconButton>
                    <ArrowDownwardIcon className={classes.downIcon}/>
                </IconButton>
            </div>
            </Collapse>
        </div>
    );
}