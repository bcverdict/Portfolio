import { ProjectDataWrapper } from './ProjectDataWrapper';
import {ProjectData} from "../../types/projectData";
import yaml from "js-yaml";
import projectData from '../../Data/ProjectData.yaml';

class MyProjectDataWrapper implements ProjectDataWrapper {

    parsedProjectData: ProjectData = yaml.load(projectData) as ProjectData;

    generalPath(id: number): string {
        return this.parsedProjectData.projectPrefix+id+this.parsedProjectData.projectSuffix+".";
    }

    getImagePath(id: number): string {
        return this.generalPath(id)+this.parsedProjectData.imageType;
    }

    getGifPath(id: number): string {
        return this.generalPath(id)+this.parsedProjectData.animType;
    }

    getProjectDescription(id: number): string {
        return this.parsedProjectData.projects[id] || "Description not found";
    }

    numberOfProjects(): number {
        return Object.keys(this.parsedProjectData.projects).length;
    }
}

export default MyProjectDataWrapper;