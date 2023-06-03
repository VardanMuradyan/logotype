import Chevron from "../assets/icons/Chevron/chevron-down.svg"
import React from "react";
import {Link} from "react-router-dom";
import Logo from "../assets/images/logo/Logo.svg";
import Close from "../assets/icons/Close/x.svg";
import PropTypes from 'prop-types';


function Navigation({Active, setActive}) {
    const nav = ["demos", "post", "categories", "shop", "buy now"]
    const navMenu = ["Post Header", "Post Layout", "Share Buttons", "Gallery Post", "Video Post"]
    const CloseBtn = () => {
        setActive(false)
    }
    return (
        <>
            <nav className={`${Active ? "nav active" : "nav"}`}>
                <div className="header menu_header">
                    <img src={Logo} alt="Logo"/>
                    <img className="menu-closed" onClick={CloseBtn} src={Close} alt="Close"/>
                </div>
                <ul className="nav-item">
                    {nav.map(item => <li key={item} className="nav__list">
                        <Link className="-item-link" to={item}>{item}<img src={Chevron} alt="Chevron"/></Link>
                        <ul className="nav__subnav">
                            {navMenu?.map((item) => <li key={item} className="_subnav-li">
                                <a href="#">{item}<img src={Chevron} alt="Chevron"/></a>
                            </li>)}</ul>
                    </li>)}
                </ul>
            </nav>
        </>
    );
}

Navigation.propTypes = {
    active: PropTypes.bool,
    setActive: PropTypes.bool
}

export default Navigation;