import logo from "../img/logo.svg"

function Navbar() {
    return(
        <nav className="nav">
            <div className="nav__container">
                <img src={logo} alt="logo"></img>
            </div>
        </nav>
    )
}

export default Navbar