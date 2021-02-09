import React from 'react';
import { AppBar, Typography, Button, Toolbar, IconButton} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import './Header.css';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
              <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Mahechain
                </Typography>
                <Link to="/busForm" className="link">
                  <p className="text">Bus</p>
                </Link>
                
                <Link to="/busStopForm" className="link">
                  <p className="text">Bus Stop</p>
                </Link>
                
                <Link to="/metroPillarForm" className="link">
                  <p className="text">Metro Pillar</p>
                </Link>
                
                <Link to="/localTrainForm" className="link">
                  <p className="text">Local Train</p>
                </Link>
                
                <Link className="link" to="/login">
                  <p className="text" color="inherit">Login</p>
                </Link>
                
              </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;
