import { ProjectDataWrapper } from './ProjectDataWrapper';
import firebase from "firebase/compat/app";
import {CleanDataReturnType} from "../GithubAPIWrapper/GithubAPIWrapper";

class MyProjectDataWrapper implements ProjectDataWrapper {
    parsedProjectData: firebase.firestore.DocumentData | null;

    constructor(data: firebase.firestore.DocumentData | null) {
        this.parsedProjectData = data as CleanDataReturnType;
    }

    dataIsNull(){
        return this.parsedProjectData == null;
    }

    getImagePath(id: number): string {

        if(!this.parsedProjectData) return "";

        return (this.parsedProjectData as CleanDataReturnType).repositories[id].previewImage;
    }

    getGifPath(id: number): string {
        if(!this.parsedProjectData) return "";

        return (this.parsedProjectData as CleanDataReturnType).repositories[id].previewGif;
    }

    getProjectName(id: number): string {
        if(!this.parsedProjectData) return "";

        return (this.parsedProjectData as CleanDataReturnType).repositories[id].name;
    }

    getProjectDescription(id: number): string {
        if(!this.parsedProjectData) return "";

        return (this.parsedProjectData as CleanDataReturnType).repositories[id].description;
    }

    numberOfProjects(): number {
        if(!this.parsedProjectData) return 0;

        return (this.parsedProjectData as CleanDataReturnType).repositories.length;
    }
}

export default MyProjectDataWrapper;
