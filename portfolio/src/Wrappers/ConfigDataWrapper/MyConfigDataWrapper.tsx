import {ConfigDataWrapper} from "./ConfigDataWrapper";
import {HeaderDataWrapper} from "../HeaderDataWrapper/HeaderDataWrapper";
import {NavbarDataWrapper} from "../NavbarDataWrapper/NavbarDataWrapper";
import {ProjectDataWrapper} from "../ProjectDataWrapper/ProjectDataWrapper";
import NullHeaderDataWrapper from "../HeaderDataWrapper/NullHeaderDataWrapper";
import NullNavbarDataWrapper from "../NavbarDataWrapper/NullNavbarDataWrapper";
import NullProjectDataWrapper from "../ProjectDataWrapper/NullProjectDataWrapper";
//import {ConfigData} from "../../types/configData";
//import configData from "../../Data/config.yaml";
//import yaml from "js-yaml";
//const parsedConfigData: ConfigData = yaml.load(configData) as ConfigData;

const fetchHeaderDataWrapper = async (): Promise<HeaderDataWrapper> => {
    try {
        return (await import("../HeaderDataWrapper/MyHeaderDataWrapper")).default;
    } catch (error) {
        console.error('Error loading HeaderDataWrapper:', error);
        return NullHeaderDataWrapper;
    }
};

const fetchNavbarDataWrapper = async (): Promise<NavbarDataWrapper> => {
    try {
        return (await import("../NavbarDataWrapper/MyNavbarDataWrapper")).default;
    } catch (error) {
        console.error('Error loading NavbarDataWrapper:', error);
        return NullNavbarDataWrapper;
    }
};

const fetchProjectDataWrapper = async (): Promise<ProjectDataWrapper> => {
    try {
        return (await import("../ProjectDataWrapper/MyProjectDataWrapper")).default;

    } catch (error) {
        console.error('Error loading ProjectDataWrapper:', error);
        return NullProjectDataWrapper;
    }
};

const myConfigDataWrapper: ConfigDataWrapper = {
    getHeaderDataWrapper: fetchHeaderDataWrapper,
    getNavbarDataWrapper: fetchNavbarDataWrapper,
    getProjectDataWrapper: fetchProjectDataWrapper
};

export default myConfigDataWrapper;
