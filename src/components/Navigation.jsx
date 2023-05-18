import Chevron from "../assets/icons/Chevron/chevron-down.svg"
import {useState} from "react";


function Navigation() {
    const nav = ["demos", "post", "categories", "shop", "Buy now"]
    const navMenu = ["Post Header", "Post Layout", "Share Buttons", "Gallery Post", "Video Post"]
    const [onmenu, setonmenu] = useState(false)
    const onMenu = () => {
        setonmenu(!onmenu)
    }
    return (
        <>
            <nav className="nav ">
                <ul className="nav-item nav_menu">
                    {nav.map(item => <li onClick={onMenu} key={item} className="nav__list">
                        <a className="-item-link" href="#">{item}<img src={Chevron} alt="Chevron"/></a>
                        <ul onmenu={onmenu} setonMenu={setonmenu}
                            className={`${onmenu ? "nav__subnav onmenu" : "nav__subnav"}`}
                            onClick={() => setonmenu(false)}>
                            {navMenu.map((item) => <li key={item} className="_subnav-li">
                                <a href="#">{item}<img src={Chevron} alt="Chevron"/></a>
                            </li>)}</ul>
                    </li>)}
                </ul>
            </nav>
        </>
    );
}

export default Navigation;