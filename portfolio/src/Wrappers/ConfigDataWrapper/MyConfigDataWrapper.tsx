import {ConfigDataWrapper} from "./ConfigDataWrapper";
import {HeaderDataWrapper} from "../HeaderDataWrapper/HeaderDataWrapper";
import {NavbarDataWrapper} from "../NavbarDataWrapper/NavbarDataWrapper";
import {ProjectDataWrapper} from "../ProjectDataWrapper/ProjectDataWrapper";
import ComponentLoadError from "../../Errors/ComponentLoadError";
import {ContactCardDataWrapper} from "../ContactDataWrapper/ContactCardDataWrapper";
import firebase from "firebase/compat";

const fetchHeaderDataWrapper = async (): Promise<HeaderDataWrapper> => {
    try {
        return (await import("../HeaderDataWrapper/MyHeaderDataWrapper")).default;
    } catch (error) {
        throw new ComponentLoadError("HeaderDataWrapper");
    }
};

const fetchNavbarDataWrapper = async (): Promise<NavbarDataWrapper> => {
    try {
        return (await import("../NavbarDataWrapper/MyNavbarDataWrapper")).default;
    } catch (error) {
        throw new ComponentLoadError("NavbarDataWrapper");
    }
};

const fetchProjectDataWrapper = async (data: firebase.firestore.DocumentData | null): Promise<ProjectDataWrapper> => {
    try {
        const module = await import("../ProjectDataWrapper/MyProjectDataWrapper");
        const projectDataWrapper = module.default;

        return new projectDataWrapper(data);

    } catch (error) {
        throw new ComponentLoadError("ProjectDataWrapper");
    }
};

const fetchContactCardDataWrapper = async (): Promise<ContactCardDataWrapper> => {
    try {
        return (await import("../ContactDataWrapper/MyContactCardDataWrapper")).default;
    } catch (error) {
        throw new ComponentLoadError("ContactCardDataWrapper");
    }
};

const myConfigDataWrapper: ConfigDataWrapper = {
    getHeaderDataWrapper: fetchHeaderDataWrapper,
    getNavbarDataWrapper: fetchNavbarDataWrapper,
    getProjectDataWrapper: fetchProjectDataWrapper,
    getContactCardDataWrapper: fetchContactCardDataWrapper
};

export default myConfigDataWrapper;
