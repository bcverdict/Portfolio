import React from 'react';
import { ProjectDataWrapper } from "../../Wrappers/ProjectDataWrapper/ProjectDataWrapper";
import ProjectCard from "../ProjectCard/ProjectCard";
import './ProjectCardList.css'

const ProjectCardList = ( dataWrapper: ProjectDataWrapper ) => {
    const projects = Array.from({ length: dataWrapper.numberOfProjects() }, (_, i) => ({
        id: i,
        description: dataWrapper.getProjectDescription(i),
        gifPath: dataWrapper.getGifPath(i),
        imagePath: dataWrapper.getImagePath(i)
    }));

    return (
        <div className={"project-card-list"}>
            {projects.map(project => (
                <ProjectCard
                    key={project.id}
                    description={project.description}
                    id={project.id}
                    gifPath={project.gifPath}
                    imagePath={project.imagePath}
                />
            ))}
        </div>
    );
};

export default ProjectCardList;
