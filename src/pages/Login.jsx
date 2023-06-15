import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import "../assets/scss/loginPage.scss"
import {useDispatch, useSelector} from "react-redux";
import {loginUser} from "../store/actions";
import {useNavigate} from "react-router";
import {formLoginSelector} from "../store/selector";

function Login() {

    const navigateToHome = useNavigate()
    const dispatch = useDispatch()
    const loginList = useSelector(formLoginSelector)
    const [login, setLogin] = useState({
        email: "",
        password: ""
    })

    const getEmail = localStorage.getItem("email")
    const getPass = localStorage.getItem("pass")

    const handleChangeValue = (e) => {
        const nextLogin = {
            ...login,
            [e.target.name]: e.target.value,
        }
        setLogin(nextLogin)
    }
    useEffect(() => {
        if (loginList) {
            if (loginList.email === getEmail && loginList.password === getPass) {
                navigateToHome('/')
            } else {
                alert("Login and Password is not found")
            }
        }
    }, [loginList])

    return (
        <>
            <div className="page">
                <div className="log_reg">
                    <h2>Login to your account</h2>
                    <div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input placeholder="Enter your email"
                                   onChange={handleChangeValue}
                                   type="email"
                                   className="form-control"
                                   name="email"/>
                            <div className="help-block">Email is required</div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input placeholder="Enter your password"
                                   onChange={handleChangeValue}
                                   type="password"
                                   className="form-control"
                                   name="password"/>
                            <div className="help-block">Password is required</div>
                        </div>
                        <div className="form-group">
                            <button onClick={() => dispatch(loginUser(login))} className="btn btn_primary">Login
                            </button>
                            <Link to="/register" className="btn btn_link">Register</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;