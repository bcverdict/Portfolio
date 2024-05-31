import { ProjectDataWrapper } from './ProjectDataWrapper';
import yaml from 'js-yaml';
import projectData from '../../Data/ProjectData.yaml';
import { ProjectData } from '../../types/projectData';

const parsedProjectData: ProjectData = yaml.load(projectData) as ProjectData;

const generalPath = (id: number): string => {
    return parsedProjectData.projectPrefix+id+parsedProjectData.projectSuffix+".";
}
const imagePath = (id: number): string => {
    return generalPath(id)+parsedProjectData.imageType;
}

const animPath = (id: number): string => {
    return generalPath(id)+parsedProjectData.animType;
}

const MyProjectDataWrapper: ProjectDataWrapper = {
    getImagePath: (id: number): string => imagePath(id),
    getGifPath: (id: number): string => animPath(id),
    getProjectDescription: (id: number): string => parsedProjectData.projects[id] || "Description not found",
    numberOfProjects: (): number => Object.keys(parsedProjectData.projects).length
};

export default MyProjectDataWrapper;
