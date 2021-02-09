import React from 'react';
import { Card, CardContent, TextField, Typography } from '@material-ui/core'; 
import './Login.css';

const Login = () => {
    return (
        <div className="login">
            <Card className="card">
                <CardContent className="content">
                    <Typography className="title">LOGIN</Typography>
                    <TextField className="text" variant="filled" placeholder="Username" />
                    <TextField className="text" variant="filled" placeholder="Password" type="password" />
                </CardContent>
            </Card>
        </div>
    )
}

export default Login;
