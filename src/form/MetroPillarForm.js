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

const MetroPillarForm = () => {
    const classes = useStyles();
    const number = ['P11', 'P22', 'P23', 'P43'];
    const [pillarNumber, setPillarNumber] = useState('');
    
    return (
        <div className="form">
            <form>
                <Card className={classes.cardContent}>
                    <CardContent className={classes.content}>
                        <InputLabel>Pillar Number  :  </InputLabel>
                        <Select
                            value={pillarNumber}
                            onChange={e => setPillarNumber(e.target.value)}
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

export default MetroPillarForm;
