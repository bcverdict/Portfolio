import {ConfigDataWrapper} from "./ConfigDataWrapper";
import {HeaderDataWrapper} from "../HeaderDataWrapper/HeaderDataWrapper";
import {NavbarDataWrapper} from "../NavbarDataWrapper/NavbarDataWrapper";
import {ProjectDataWrapper} from "../ProjectDataWrapper/ProjectDataWrapper";
import {ConfigData} from "../../types/configData";
import configData from "../../Data/config.yaml";
import NullHeaderDataWrapper from "../HeaderDataWrapper/NullHeaderDataWrapper";
import yaml from "js-yaml";
import {useEffect, useState} from "react";
import NullNavbarDataWrapper from "../NavbarDataWrapper/NullNavbarDataWrapper";
import NullProjectDataWrapper from "../ProjectDataWrapper/NullProjectDataWrapper";

const parsedConfigData: ConfigData = yaml.load(configData) as ConfigData;

const useHeaderDataWrapper = (): HeaderDataWrapper => {
    const [headerData, setHeaderData] = useState<HeaderDataWrapper>(NullHeaderDataWrapper);

    useEffect(() => {
        const fetchHeaderData = async () => {
            const CustomHeaderDataWrapper = (await import("../HeaderDataWrapper/MyHeaderDataWrapper")).default;
            setHeaderData(CustomHeaderDataWrapper);
        };
        fetchHeaderData();
    }, []);

    return headerData;
};

const useNavbarDataWrapper = (): NavbarDataWrapper => {
    const [navbarData, setNavbarData] = useState<NavbarDataWrapper>(NullNavbarDataWrapper);

    useEffect(() => {
        const fetchNavbarData = async () => {
            const CustomNavbarDataWrapper: NavbarDataWrapper = (await import("../NavbarDataWrapper/MyNavbarDataWrapper")).default;
            setNavbarData(CustomNavbarDataWrapper);
        };
        fetchNavbarData();
    }, []);

    return navbarData;
};

const useProjectDataWrapper = (): ProjectDataWrapper => {
    const [projectData, setProjectData] = useState<ProjectDataWrapper>(NullProjectDataWrapper);

    useEffect(() => {
        const fetchProjectData = async () => {
            const CustomProjectDataWrapper: ProjectDataWrapper = (await import("../ProjectDataWrapper/MyProjectDataWrapper")).default;
            setProjectData(CustomProjectDataWrapper);
        };
        fetchProjectData();
    }, []);

    return projectData;
};

const myConfigDataWrapper: ConfigDataWrapper = {
    getHeaderDataWrapper: useHeaderDataWrapper,
    getNavbarDataWrapper: useNavbarDataWrapper,
    getProjectDataWrapper: useProjectDataWrapper
};

export default myConfigDataWrapper;
