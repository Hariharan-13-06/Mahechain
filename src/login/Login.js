import React from 'react'; 
import './Login.css';

const Login = () => {
    return (
        <div className="login">
            <div className="login_data">
                <h3>LOGIN</h3>
                <input className="input" placeholder="Username" type="text" />
                <input className="input" placeholder="Password" type="password" />
                <button className="button">Login</button>
            </div>
        </div>
    )
}

export default Login;
