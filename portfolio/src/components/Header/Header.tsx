import './Header.css';
import {HeaderDataWrapper} from "../../Wrappers/HeaderDataWrapper/HeaderDataWrapper";
function Header (MyHeaderDataWrapper: HeaderDataWrapper, Navbar: JSX.Element) {
    return(
        <div className={"Header"}>
            <div className="profile-picture-container">
                <img className={"profile-picture"} alt="ProfilePicture" src={MyHeaderDataWrapper.getProfilePictureLocation()}></img>
            </div>
            {Navbar}
        </div>
    )
}
export default Header;