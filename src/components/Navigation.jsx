import Chevron from "../assets/icons/Chevron/chevron-down.svg"


function Navigation() {
    const nav = ["demos", "post", "categories", "shop", "Buy now"]
    const navMenu = ["Post Header", "Post Layout", "Share Buttons", "Gallery Post", "Video Post"]
    return (
        <>
            <nav className="nav ">
                <ul className="nav-item nav_menu">
                    {nav.map(item => <li key={item} className="nav__list">
                        <a className="-item-link" href="#">{item}<img src={Chevron} alt="Chevron"/></a>
                        <ul className="nav__subnav">
                            {navMenu.map((item)=> <li key={item} className="_subnav-li">
                                <a href="#">{item}<img src={Chevron} alt="Chevron"/></a>
                            </li>)}</ul>
                    </li>)}
                </ul>
            </nav>
        </>
    );
}

export default Navigation;