import {HeaderDataWrapper} from "./HeaderDataWrapper";
import {HeaderData} from "../../types/headerData";
import headerData from "../../Data/HeaderData.yaml";
import yaml from "js-yaml";

const parsedHeaderData : HeaderData = yaml.load(headerData) as HeaderData;

const MyHeaderDataWrapper: HeaderDataWrapper = {
    getProfilePictureLocation(): string {
        return parsedHeaderData.ProfilePictureLocation;
    }
}

export default MyHeaderDataWrapper;