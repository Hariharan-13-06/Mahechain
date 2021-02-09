import React from 'react';
import { InputLabel, Input, CardContent, Card, TextField  } from '@material-ui/core';
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
    }
  }));

const Form = ({name}) => {
    const classes = useStyles();

    return (
        <div className="form">
            <form>
                <Card className={classes.cardContent}>
                    <CardContent className={classes.content}>
                        <InputLabel>{name}  :  </InputLabel>
                        <Input />
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
                </Card>
            </form>

        </div>
    )
}

export default Form;
