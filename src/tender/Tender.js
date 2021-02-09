import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import './Tender.css';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: "50px"
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
  }));

const Tender = () => {
    const classes = useStyles();

    return (
        <Grid container spacing={3} className="tender">
            <Link to="/form" className="link">
                <div className="content">
                    <p>BUS</p>
                </div>
            </Link>
            
            <Link to="/form" className="link">
                <Grid item xs={6}>
                    <Paper>
                        <Typography align="center" variant="button" color="primary">Bus Stop</Typography>
                    </Paper>
                </Grid>
            </Link>
            
            <Grid item xs={6}>
                <Paper>
                    <Typography  align="center" variant="button" color="primary">Metro Pillar</Typography>
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper>
                    <Typography  align="center" variant="button" color="primary">Local Train</Typography>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Tender;
