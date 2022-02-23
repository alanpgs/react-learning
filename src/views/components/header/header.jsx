import "./header.scss";
import NavLogo from "./logo/navlogo";
import Nav from "./nav/nav";
import { useState } from "react";

 function Header() {

    let [navItems, setNavItems] = useState([
        {name: 'Home', id: 'menu1', link: '/'},
        {name: 'Explore', id: 'menu2', link: '/explore'},
        {name: 'Collection', id: 'menu3', link: '/collection'},
        {name: 'Help', id: 'menu4', link: '/help'},
    ])

    return (<header>
        <div className="container">
            <div className="nav_wrapper">
                <NavLogo />
                <Nav navItems={navItems}/>
            </div>
        </div>
    </header>);
}

export default Header;