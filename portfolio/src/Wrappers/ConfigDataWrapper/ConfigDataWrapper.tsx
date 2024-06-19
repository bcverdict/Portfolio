import {HeaderDataWrapper} from "../HeaderDataWrapper/HeaderDataWrapper";
import {NavbarDataWrapper} from "../NavbarDataWrapper/NavbarDataWrapper";
import {ContactCardDataWrapper} from "../ContactDataWrapper/ContactCardDataWrapper";
import {ProjectDataWrapper} from "../ProjectDataWrapper/ProjectDataWrapper";
import firebase from "firebase/compat";

export interface ConfigDataWrapper {
    getHeaderDataWrapper(): Promise<HeaderDataWrapper>;
    getNavbarDataWrapper(): Promise<NavbarDataWrapper>;
    getProjectDataWrapper(data: firebase.firestore.DocumentData | null): Promise<ProjectDataWrapper>;
    getContactCardDataWrapper(): Promise<ContactCardDataWrapper>
}