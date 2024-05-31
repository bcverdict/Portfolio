import './Header.css';
import {HeaderDataWrapper} from "../../Wrappers/HeaderDataWrapper/HeaderDataWrapper";
function Header (MyHeaderDataWrapper: HeaderDataWrapper, Navbar: JSX.Element) {
    return(
        <div className={"Header"}>
            <img className={"ProfilePicture"} alt={MyHeaderDataWrapper.getProfilePictureLocation()}></img>
            {Navbar}
        </div>
    )
}
export default Header;