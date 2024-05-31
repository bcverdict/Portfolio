import {HeaderDataWrapper} from "../HeaderDataWrapper/HeaderDataWrapper";
import {NavbarDataWrapper} from "../NavbarDataWrapper/NavbarDataWrapper";
import {ProjectDataWrapper} from "../ProjectDataWrapper/ProjectDataWrapper";

export interface ConfigDataWrapper {
    getHeaderDataWrapper(): HeaderDataWrapper;
    getNavbarDataWrapper(): NavbarDataWrapper;
    getProjectDataWrapper(): ProjectDataWrapper;
}