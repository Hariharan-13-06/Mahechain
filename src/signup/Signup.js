import React from 'react';
import './Signup.css';

const Signup = () => {
    return (
        <div className="signup">
            <div className="signup_data">
                <h3>SIGNUP</h3>
                <input className="input" placeholder="Username" type="text" />
                <input className="input" placeholder="Mail ID" type="email" />
                <input className="input" placeholder="Number" type="number" />
                <input className="input" placeholder="Password" type="password" />
                <input className="input" placeholder="Confirm Password" type="password" />
                <button className="button">CREATE</button>
            </div>
        </div>
    )
}

export default Signup;
