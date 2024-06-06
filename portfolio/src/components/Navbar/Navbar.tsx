import {NavbarDataWrapper} from "../../Wrappers/NavbarDataWrapper/NavbarDataWrapper";
import './Navbar.css'
function Navbar(navbarDataWrapper: NavbarDataWrapper) {

    const Links = Array.from({ length: navbarDataWrapper.numberOfLinks()}, (_, i) => ({
        id: i,
        link: navbarDataWrapper.getLink(i),
        name: navbarDataWrapper.getName(i),
    }));

    return(
        <nav className="navbar">
            <ul className="navbar-links">
                {Links.map((LinkObject) => (
                    <a key={LinkObject.id} href={LinkObject.link}>{LinkObject.name}</a>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;