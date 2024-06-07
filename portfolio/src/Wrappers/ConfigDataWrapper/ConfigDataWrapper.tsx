import {HeaderDataWrapper} from "../HeaderDataWrapper/HeaderDataWrapper";
import {NavbarDataWrapper} from "../NavbarDataWrapper/NavbarDataWrapper";
import {ProjectDataWrapper} from "../ProjectDataWrapper/ProjectDataWrapper";
import {ContactCardDataWrapper} from "../ContactDataWrapper/ContactCardDataWrapper";

export interface ConfigDataWrapper {
    getHeaderDataWrapper(): Promise<HeaderDataWrapper>;
    getNavbarDataWrapper(): Promise<NavbarDataWrapper>;
    getProjectDataWrapper(): Promise<ProjectDataWrapper>;
    getContactCardDataWrapper(): Promise<ContactCardDataWrapper>
}