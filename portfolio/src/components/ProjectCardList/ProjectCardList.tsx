import React from 'react';
import { ProjectDataWrapper } from "../../Wrappers/ProjectDataWrapper/ProjectDataWrapper";
import ProjectCard from "../ProjectCard/ProjectCard";

interface ProjectCardListProps {
    dataWrapper: ProjectDataWrapper;
}

const ProjectCardList: React.FC<ProjectCardListProps> = ({ dataWrapper }) => {
    const projects = Array.from({ length: dataWrapper.numberOfProjects() }, (_, i) => ({
        id: i,
        description: dataWrapper.getProjectDescription(i),
        gifPath: dataWrapper.getGifPath(i),
        imagePath: dataWrapper.getImagePath(i)
    }));

    return (
        <div>
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
