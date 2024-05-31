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
import AppError from "../Errors/AppError";
import MyProjectDataWrapper from "../Wrappers/ProjectDataWrapper/MyProjectDataWrapper";

export const useDependencyManager = () => {
    const headerDataWrapper: HeaderDataWrapper = MyConfigDataWrapper.getHeaderDataWrapper();
    const navbarDataWrapper: NavbarDataWrapper = MyConfigDataWrapper.getNavbarDataWrapper();
    const projectDataWrapper: ProjectDataWrapper = MyConfigDataWrapper.getProjectDataWrapper();

    const EmptyElement = <div></div>;
    const NavbarElement = navbarDataWrapper === NullNavbarDataWrapper ? EmptyElement : Navbar(navbarDataWrapper)
    const HeaderElement = headerDataWrapper === NullHeaderDataWrapper ? EmptyElement : Header(headerDataWrapper, NavbarElement);
    const ProjectCardListElement = projectDataWrapper === NullProjectDataWrapper ? EmptyElement : <ProjectCardList dataWrapper={MyProjectDataWrapper}/>;

    return {EmptyElement, HeaderElement, NavbarElement, ProjectCardListElement, AppError}
}

export default useDependencyManager;