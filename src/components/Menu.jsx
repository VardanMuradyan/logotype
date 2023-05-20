import React from 'react';
import Logo from "../assets/images/logo/Logo.svg";
import Close from "../assets/icons/Close/x.svg";
import Navigation from "./Navigation";

const Menu = ({Active, setActive}) => {
    const CloseBtn = () => {
        setActive(false)
    }

    return (
        <>
            <div className={`${Active ? "menu active" : "menu"}`} onClick={() => setActive(false)}>
               <div onClick={event => event.stopPropagation()}>
                   <div className="header menu_header" >
                       <img src={Logo} alt="Logo"/>
                       <img className="menu-closed" onClick={CloseBtn} src={Close} alt="Close"/>
                   </div>
                   <div>
                       {/*<Navigation/>*/}
                   </div>
               </div>
            </div>
        </>
    );
};

export default Menu;