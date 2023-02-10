import logo from "../img/logo.svg"

function Navbar() {
    return(
        <nav className="nav">
            <div className="nav__container">
                <img src={logo} alt="logo"></img>
                <ul>
                    <li>text</li>
                    <li>text</li>
                    <li>text</li>
                    <li>text</li>
                    <li>text</li>
                    <li>text</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar