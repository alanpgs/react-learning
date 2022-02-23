import brandLogo from "../../../../assets/images/logo-icon.svg"

function NavLogo() {

    const logo = brandLogo;

    return (
        <div className="nav_logo">
            <a href="#" className="nav_logo_link">
                <img src={logo} alt="UrbanVyali"></img>
            </a>
        </div>
    )
}

export default NavLogo;