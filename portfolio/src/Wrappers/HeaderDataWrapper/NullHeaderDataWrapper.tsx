import {HeaderDataWrapper} from "./HeaderDataWrapper";

const NullHeaderDataWrapper: HeaderDataWrapper = {
    getProfilePictureLocation(): string {
        throw "No HeaderDataWrapper";
    }
}

export default NullHeaderDataWrapper;