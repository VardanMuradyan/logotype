import Chevron from "../assets/icons/Chevron/chevron-down.svg"


function Navigation() {
    const nav = ["demos", "post", "categories", "shop", "Buy now"]
   // const navMenu = ["Post Header", "Post Layout", "Share Buttons", "Gallery Post", "Video Post"]
    const list = nav.map(item => <li key={item} className="nav__list">
        <a href="#">{item}<img src={Chevron} alt="Chevron"/></a>
    </li>)
    return (
        <>
            <nav className="nav ">
                <ul className="nav-item nav_menu">
                    {list}
                </ul>
            </nav>
        </>
    );
}

export default Navigation;