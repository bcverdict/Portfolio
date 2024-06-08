import MyConfigDataWrapper from "../Wrappers/ConfigDataWrapper/MyConfigDataWrapper";
import {HeaderDataWrapper} from "../Wrappers/HeaderDataWrapper/HeaderDataWrapper";
import {NavbarDataWrapper} from "../Wrappers/NavbarDataWrapper/NavbarDataWrapper";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import {ProjectDataWrapper} from "../Wrappers/ProjectDataWrapper/ProjectDataWrapper";
import ProjectCardList from "../components/ProjectCardList/ProjectCardList";
import ComponentLoadError from "../Errors/ComponentLoadError";
import {ContactCardDataWrapper} from "../Wrappers/ContactDataWrapper/ContactCardDataWrapper";
import ContactCard from "../components/ContactCard/ContactCard";

export class ElementFactory {

    public static CreateEmptyElement(){
        return <div></div>;
    }

    public static async CreateNavbarElement(){
        try {
            const navbarDataWrapper: NavbarDataWrapper = await MyConfigDataWrapper.getNavbarDataWrapper();

            return Navbar(navbarDataWrapper)
        } catch (e) {
            throw new ComponentLoadError("Navbar");
        }
    }

    public static async CreateHeaderElement(){
        try {
            const headerDataWrapper: HeaderDataWrapper = await MyConfigDataWrapper.getHeaderDataWrapper();
            const navbarElement = await ElementFactory.CreateNavbarElement();

            return  Header(headerDataWrapper, navbarElement);
        } catch (e) {
            throw new ComponentLoadError("Header");
        }

    }

    public static async CreateProjectCardListElement(){
        try {
            const projectDataWrapper: ProjectDataWrapper = await MyConfigDataWrapper.getProjectDataWrapper();

            return ProjectCardList(projectDataWrapper);
        } catch (e) {
            throw new ComponentLoadError("ProjectCardList");
        }

    }

    public static async CreateContactCardElement(){
        try {
            const contactCardDataWrapper: ContactCardDataWrapper = await MyConfigDataWrapper.getContactCardDataWrapper();

            return ContactCard(contactCardDataWrapper);
        } catch (e) {
            throw new ComponentLoadError("ContactCard");
        }

    }
}

export default ElementFactory;