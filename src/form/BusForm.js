import React, { useState } from 'react';
import { InputLabel, Input, CardContent, Card, Select, MenuItem, Button  } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './BusForm.css';

const useStyles = makeStyles((theme) => ({
    content: {
        color: 'black',
        padding: '20px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#bcebe9'
    },
    button: {
        marginLeft: '10px'
    }
  }));

const BusForm = () => {
    const classes = useStyles();
    const [busNumber, setBusNumber] = useState('');
    
    const bus = ['M18C', '52K', '21G', '12B'];

    return (
        <div className="form">
            <form>
                <Card className={classes.cardContent}>
                    <CardContent className={classes.content}>
                        <InputLabel>Bus Number  :  </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={busNumber}
                            onChange={e => setBusNumber(e.target.value)}
                        >
                            {
                                bus.map(val => (
                                    <MenuItem value={val}>{val}</MenuItem>
                                ))
                            }
                        </Select>
                    </CardContent>
                    <CardContent className={classes.content}>
                        <InputLabel>Company Name  :  </InputLabel>
                        <Input />
                    </CardContent>
                    <CardContent className={classes.content}>
                        <InputLabel>Quotation Amount  :  </InputLabel>
                        <Input />
                    </CardContent>
                    <CardContent className={classes.content}>
                        <InputLabel>Period    -    Jan 2020 to Mar 2022</InputLabel>
                    </CardContent>
                    <CardContent className={classes.content}>
                        <Button className={classes.button} variant="contained" color="primary" >SUBMIT</Button>
                        <Button className={classes.button} variant="contained" color="secondary">CLEAR</Button>
                    </CardContent>
                </Card>
            </form>

        </div>
    )
}

export default BusForm;
