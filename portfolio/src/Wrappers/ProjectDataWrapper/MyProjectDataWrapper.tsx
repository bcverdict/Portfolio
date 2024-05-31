import { ProjectDataWrapper } from './ProjectDataWrapper';
import yaml from 'js-yaml';
import projectData from '../../Data/ProjectData.yaml';
import { ProjectData } from '../../types/projectData';

const parsedProjectData: ProjectData = yaml.load(projectData) as ProjectData;

const createImagePath = (id: number): string => {
    return parsedProjectData.projectPrefix+id+parsedProjectData.projectSuffix+"."+parsedProjectData.imageType;
}

const createAnimPath = (id: number): string => {
    return parsedProjectData.projectPrefix+id+parsedProjectData.projectSuffix+"."+parsedProjectData.animType;
}

const MyProjectDataWrapper: ProjectDataWrapper = {
    getImagePath: (id: number): string => createImagePath(id),
    getGifPath: (id: number): string => createAnimPath(id),
    getProjectDescription: (id: number): string => parsedProjectData.projects[id] || "Description not found",
    numberOfProjects: (): number => Object.keys(parsedProjectData.projects).length
};

export default MyProjectDataWrapper;
