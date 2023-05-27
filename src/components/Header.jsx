import Logo from '../assets/images/logo/Logo.svg'
import Search from '../assets/icons/Search/B.svg'
import SubMenu from '../assets/icons/Mobile-menu/Combined Shape.svg'
import {useState} from "react";
import Navigation from "./Navigation";
import {Link} from "react-router-dom";

function Header({filteredItem, setFilteredItem}) {
    const [MenuActive, setMenuActive] = useState(false);
    const ButtonOpen = () => {
        setMenuActive(!MenuActive)
    }

    return (
        <>
            <div className="container">
                <header className="header">
                    <div className="header__menu">
                        <img onClick={ButtonOpen} src={SubMenu} alt=""/>
                        <Navigation Active={MenuActive} setActive={setMenuActive}/>
                    </div>
                    <div className="header__logo">
                        <Link to="/"><img className="" src={Logo} alt="Logo"/></Link>
                    </div>
                    <div className="header-search-to-input">
                        <img className="header__search" src={Search} alt="Logo"/>
                        <input type="text" value={filteredItem} onChange={(event) => {
                            setFilteredItem(event.target.value)
                        }}/>
                    </div>
                </header>
            </div>
        </>
    );
}

export default Header;