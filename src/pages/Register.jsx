import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {register} from "../store/actions/index"
import {useDispatch, useSelector} from "react-redux";
import {formListSelector} from "../store/selector";
import {useNavigate} from "react-router";

function Register() {

    const dispatch = useDispatch()
    const toLoginUser = useNavigate()
    const formList = useSelector(formListSelector)
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        date: "",
        email: "",
        password: ""
    })
    useEffect(() => {
        if (formList) {
            localStorage.clear()

            localStorage.setItem("firstName", formList.firstName)
            localStorage.setItem("lastName", formList.lastName)
            localStorage.setItem("date", formList.date)
            localStorage.setItem("email", formList.email)
            localStorage.setItem("pass", formList.password)
            toLoginUser('/login')

            alert("You registered")
        }
    }, [formList])


    const handleChangeValue = (e) => {
        const nextForm = {
            ...form,
            [e.target.name]: e.target.value,
        }
        setForm(nextForm)
    }

    return (
        <>
            <div className="page">
                <div className="log_reg">
                    <h2>Register to new account</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input value={form.firstName}
                                   placeholder="Enter your first name"
                                   type="text"
                                   onChange={handleChangeValue}
                                   className="form-control"
                                   name="firstName"/>
                            <div className="help-block">First Name is required</div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input value={form.lastName}
                                   placeholder="Enter your last name"
                                   type="text"
                                   onChange={handleChangeValue}
                                   className="form-control"
                                   name="lastName"/>
                            <div className="help-block">Last Name is required</div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="date">Date</label>
                            <input value={form.date}
                                   placeholder="Enter your data"
                                   type="date"
                                   onChange={handleChangeValue}
                                   className="form-control"
                                   name="date"/>
                            <div className="help-block">Date is required</div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input value={form.email}
                                   placeholder="Enter your email"
                                   type="email"
                                   onChange={handleChangeValue}
                                   className="form-control"
                                   name="email"/>
                            <div className="help-block">Email is required</div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input value={form.password}
                                   placeholder="Enter your password"
                                   type="password"
                                   onChange={handleChangeValue}
                                   className="form-control"
                                   name="password"/>
                            <div className="help-block">Password is required</div>
                        </div>
                        <div className="form-group">
                            <button onClick={() => dispatch(register(form))} className="btn btn_primary">Register
                            </button>
                            <Link to="/login" className="btn btn_link">Cancel</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Register;