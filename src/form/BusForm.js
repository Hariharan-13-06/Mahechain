import React from 'react';
import { InputLabel, Input, CardContent, Card, TextField  } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    content: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center'
    },
    cardContent: {
        textAlign: 'center',
        alignItems: 'center'
    }
  }));

const Form = () => {
    const classes = useStyles();

    return (
        <div className="form">
            <form>
                <Card className={classes.cardContent}>
                    <CardContent className={classes.content}>
                        <InputLabel>Bus Number</InputLabel>
                        <Input />
                    </CardContent>
                    <CardContent className={classes.content}>
                        <InputLabel>Company Name</InputLabel>
                        <Input />
                    </CardContent>
                    <CardContent className={classes.content}>
                        <InputLabel>Quotation Amount</InputLabel>
                        <Input />
                    </CardContent>
                    <CardContent className={classes.content}>
                        <InputLabel>Period</InputLabel>
                        <Input />
                    </CardContent>
                </Card>
            </form>

        </div>
    )
}

export default Form;
