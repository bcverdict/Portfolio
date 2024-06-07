import {ContactCardDataWrapper} from "./ContactCardDataWrapper";

import yaml from "js-yaml";
import {ContactCardData} from "../../types/contactCardData";
import contactCard from "../../Data/ContactCardData.yaml";


const parsedContactCardData: ContactCardData = yaml.load(contactCard) as ContactCardData;

const MyContactCardDataWrapper: ContactCardDataWrapper = {

    getImagePath(): string {
        return parsedContactCardData.ImagePath;
    },
    getName(): string {
        return parsedContactCardData.Name;
    },
    getGithub(): string {
        return parsedContactCardData.Github;
    },
    getLinkedIn(): string {
        return parsedContactCardData.LinkedIn;
    }
}

export default MyContactCardDataWrapper;