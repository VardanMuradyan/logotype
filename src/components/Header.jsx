import Logo from '../assets/images/logo/Logo.svg'
import Search from '../assets/icons/Search/B.svg'
import SubMenu from '../assets/icons/Mobile-menu/Combined Shape.svg'
import Menu from "./Menu";
import {useState} from "react";

function Header() {
    const [MenuActive, setMenuActive] = useState(false);

    const ButtonOpen = () => {
        setMenuActive(!MenuActive)
    }

    return (
        <>
            <div className="container">
                <header className="header">
                    <div  className="header__menu">
                        <img onClick={ButtonOpen} src={SubMenu} alt=""/>
                        <Menu Active={MenuActive} setActive={setMenuActive}/>
                    </div>
                    <div className="header__logo">
                        <a href="#"><img className="" src={Logo} alt="Logo"/></a>
                    </div>
                    <div>
                        <img className="header__search" src={Search} alt="Logo"/>
                    </div>
                </header>
            </div>
        </>
    );
}

export default Header;