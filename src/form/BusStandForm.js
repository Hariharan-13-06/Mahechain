import React, { useState } from 'react';
import { InputLabel, Input, CardContent, Card, Select, MenuItem, Button  } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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

const BusStandForm = ({name}) => {
    const classes = useStyles();
    const busStandName = ['AAA', 'BBB', 'CCC', 'DDD'];
    const [busStand, setBusStand] = useState('');

    return (
        <div className="form">
            <form>
                <Card className={classes.cardContent}>
                    <CardContent className={classes.content}>
                        <InputLabel>Bus Stop Name  :  </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={busStand}
                            onChange={e => setBusStand(e.target.value)}
                        >
                            {
                                busStandName.map(val => (
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

export default BusStandForm;
