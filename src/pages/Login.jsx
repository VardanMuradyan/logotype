import React from 'react';
import {Link} from "react-router-dom";
import "../assets/scss/loginPage.scss"

function Login() {



    return (
        <>
            <div className="page">
                <form className="log_reg">
                    <h2>Login to your account</h2>
                    <div>
                        <div className="form-group">
                            <label htmlFor="username">Email</label>
                            <input placeholder="Enter your email" type="text" className="form-control" name="username"/>
                            <div className="help-block">Email is required</div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input placeholder="Enter your password" type="password" className="form-control" name="password"/>
                            <div className="help-block">Password is required</div>
                        </div>
                        <div className="form-group">
                            <button className="btn btn_primary">Login</button>
                            <Link to="/register" className="btn btn_link">Register</Link>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Login;