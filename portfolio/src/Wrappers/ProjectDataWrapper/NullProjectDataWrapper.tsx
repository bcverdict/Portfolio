import {ProjectDataWrapper} from "./ProjectDataWrapper";
import NullDataWrapperError from "../../Errors/NullDataWrapperError";

const NullProjectDataWrapper: ProjectDataWrapper = {
    getGifPath(): string {
        throw new NullDataWrapperError();
    },
    getProjectDescription(): string {
        throw new NullDataWrapperError();
    },
    getImagePath(): string {
        throw new NullDataWrapperError();
    },
    numberOfProjects(): number {
        throw new NullDataWrapperError();
    }
}

export default NullProjectDataWrapper;