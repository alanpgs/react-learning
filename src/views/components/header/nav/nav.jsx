import Button from "../../button/button";
import { useState } from "react";

function Nav() {

    const navList = [
        {name: 'Home', id: 'menu1', link: '/'},
        {name: 'Explore', id: 'menu2', link: '/explore'},
        {name: 'Collection', id: 'menu3', link: '/collection'},
        {name: 'Help', id: 'menu4', link: '/help'},
    ]

    const [navItem, setNavItem] = useState([
        {name: 'Home', id: 'menu1', link: '/', visible: true},
        {name: 'Explore', id: 'menu2', link: '/explore', visible: true},
        {name: 'Collection', id: 'menu3', link: '/collection', visible: true},
        {name: 'Help', id: 'menu4', link: '/help', visible: false}, 
    ]);

    return (
        <nav>
            <ul className="nav_list">
                {navItem .map(list => {
                    list.visible ? (<li key={list.id}><a href={list.link} className="nav_link" title={list.name}>{list.name}</a></li>) :  null
                })}
                <li><Button /></li>
            </ul>
        </nav>
    )
}

export default Nav;