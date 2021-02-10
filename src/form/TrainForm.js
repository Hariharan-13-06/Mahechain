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

const TrainForm = () => {
    const classes = useStyles();
    const number = ['40123', '40236', '40556', '40576'];
    const [trainNumber, setTrainNumber] = useState('');
    
    return (
        <div className="form">
            <form>
                <Card className={classes.cardContent}>
                    <CardContent className={classes.content}>
                        <InputLabel>Train Number  :  </InputLabel>
                        <Select
                            value={trainNumber}
                            onChange={e => setTrainNumber(e.target.value)}
                        >
                            {
                                number.map(val => (
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

export default TrainForm;
