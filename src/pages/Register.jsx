import React from 'react';
import {Link} from "react-router-dom";

function Register() {
    return (
        <>
            <div className="page">
                <div className="log_reg">
                    <h2>Register to new account</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input placeholder="Enter your first name" type="text" className="form-control"
                                   name="firstName"/>
                            <div className="help-block">First Name is required</div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input placeholder="Enter your last name" type="text" className="form-control" name="lastName"/>
                            <div className="help-block">Last Name is required</div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="date">Date</label>
                            <input placeholder="Enter your data" type="date" className="form-control" name="date"/>
                            <div className="help-block">Date is required</div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="username">Email</label>
                            <input placeholder="Enter your email" type="email" className="form-control" name="username"/>
                            <div className="help-block">Email is required</div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input placeholder="Enter your password" type="password" className="form-control" name="password"/>
                            <div className="help-block">Password is required</div>
                        </div>
                        <div className="form-group">
                            <button className="btn btn_primary">Register</button>
                            <Link to="/login" className="btn btn_link">Cancel</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Register;