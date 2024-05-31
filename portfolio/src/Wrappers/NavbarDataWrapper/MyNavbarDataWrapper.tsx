import {NavbarDataWrapper} from "./NavbarDataWrapper";
import navbarData from "../../Data/NavbarData.yaml";
import yaml from "js-yaml";
import {NavbarData} from "../../types/narvarData";

const parsedNavbarData: NavbarData = yaml.load(navbarData) as NavbarData;

const MyNavbarDataWrapper: NavbarDataWrapper = {
    getLink: (id: number): string => parsedNavbarData.Links[id].URL,
    getName: (id: number): string => parsedNavbarData.Links[id].Name,
    numberOfLinks: (): number => Object.keys(parsedNavbarData.Links).length
}

export default MyNavbarDataWrapper;