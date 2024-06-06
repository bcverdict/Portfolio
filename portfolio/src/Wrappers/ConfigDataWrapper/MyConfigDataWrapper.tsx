import {ConfigDataWrapper} from "./ConfigDataWrapper";
import {HeaderDataWrapper} from "../HeaderDataWrapper/HeaderDataWrapper";
import {NavbarDataWrapper} from "../NavbarDataWrapper/NavbarDataWrapper";
import {ProjectDataWrapper} from "../ProjectDataWrapper/ProjectDataWrapper";
import ComponentLoadError from "../../Errors/ComponentLoadError";

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

const fetchProjectDataWrapper = async (): Promise<ProjectDataWrapper> => {
    try {
        return (await import("../ProjectDataWrapper/MyProjectDataWrapper")).default;
    } catch (error) {
        throw new ComponentLoadError("ProjectDataWrapper");
    }
};

const myConfigDataWrapper: ConfigDataWrapper = {
    getHeaderDataWrapper: fetchHeaderDataWrapper,
    getNavbarDataWrapper: fetchNavbarDataWrapper,
    getProjectDataWrapper: fetchProjectDataWrapper
};

export default myConfigDataWrapper;
