import Button from "../../button/button";
import { useState } from "react";

function Nav(props) {
    return (
        <nav>
            <ul className="nav_list">
                {props.navItems .map(list => {
                   return (
                    <li key={list.id}><a href={list.link} className="nav_link" title={list.name}>{list.name}</a></li>
                   )
                })}
                <li><Button title="Login"/></li>
            </ul>
        </nav>
    )
}

export default Nav;