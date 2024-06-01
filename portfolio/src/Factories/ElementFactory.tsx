import MyConfigDataWrapper from "../Wrappers/ConfigDataWrapper/MyConfigDataWrapper";
import {HeaderDataWrapper} from "../Wrappers/HeaderDataWrapper/HeaderDataWrapper";
import {NavbarDataWrapper} from "../Wrappers/NavbarDataWrapper/NavbarDataWrapper";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import NullHeaderDataWrapper from "../Wrappers/HeaderDataWrapper/NullHeaderDataWrapper";
import NullNavbarDataWrapper from "../Wrappers/NavbarDataWrapper/NullNavbarDataWrapper";
import {ProjectDataWrapper} from "../Wrappers/ProjectDataWrapper/ProjectDataWrapper";
import NullProjectDataWrapper from "../Wrappers/ProjectDataWrapper/NullProjectDataWrapper";
import ProjectCardList from "../components/ProjectCardList/ProjectCardList";
import MyProjectDataWrapper from "../Wrappers/ProjectDataWrapper/MyProjectDataWrapper";

export class ElementFactory {

    public static CreateEmptyElement(){
        return <div></div>;
    }

    public static async CreateNavbarElement(){
        const navbarDataWrapper: NavbarDataWrapper = await MyConfigDataWrapper.getNavbarDataWrapper();

        if(navbarDataWrapper === NullNavbarDataWrapper){
            ElementFactory.CreateEmptyElement()
        }

        return Navbar(navbarDataWrapper)
    }

    public static async CreateHeaderElement(){
        const headerDataWrapper: HeaderDataWrapper = await MyConfigDataWrapper.getHeaderDataWrapper();

        if(headerDataWrapper === NullHeaderDataWrapper){
            return ElementFactory.CreateEmptyElement();
        }

        const navbarElement = await ElementFactory.CreateNavbarElement();
        return  Header(headerDataWrapper, navbarElement);
    }

    public static async CreateProjectCardListElement(){
        const projectDataWrapper: ProjectDataWrapper = await MyConfigDataWrapper.getProjectDataWrapper();

        if(projectDataWrapper === NullProjectDataWrapper)
        {
            return ElementFactory.CreateEmptyElement();
        }

        return <ProjectCardList dataWrapper={MyProjectDataWrapper}/>;
    }
}

export default ElementFactory;