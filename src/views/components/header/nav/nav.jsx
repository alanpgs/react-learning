import Button from "../../button/button";

function Nav() {

    const navList = [
        {name: 'Home', id: 'menu1', link: '/'},
        {name: 'Explore', id: 'menu2', link: '/explore'},
        {name: 'Collection', id: 'menu3', link: '/collection'},
        {name: 'Help', id: 'menu4', link: '/help'},
    ]

    return (
        <nav>
            <ul className="nav_list">
                {navList.map(list => (<li key={list.id}><a href={list.link} className="nav_link" title={list.name}>{list.name}</a></li>))}
                <li><Button /></li>
            </ul>
        </nav>
    )
}

export default Nav;