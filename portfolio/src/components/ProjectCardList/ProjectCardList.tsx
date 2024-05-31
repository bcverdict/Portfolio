import {ProjectDataWrapper} from "../../Wrappers/ProjectDataWrapper/ProjectDataWrapper";
import ProjectCard from "../ProjectCard/ProjectCard";

function ProjectCardList(dataWrapper : ProjectDataWrapper) {

    const projects = Array.from({ length: dataWrapper.numberOfProjects()}, (_, i) => ({
        id: i,
        description: dataWrapper.getProjectDescription(i),
        gifPath: dataWrapper.getGifPath(i),
        imagePath: dataWrapper.getImagePath(i)
    }));

    return(
        <div>
            {projects.map(project => (
                ProjectCard(project.description, project.id, project.gifPath, project.imagePath)
            ))}
        </div>
    );
}

export default ProjectCardList;