import React, {useState} from "react";
import './ProjectCard.css';

interface ProjectCardProps {
    id: number;
    description: string;
    gifPath: string;
    imagePath: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, description, gifPath, imagePath }) => {

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    }
    const handleMouseLeave = () => {
        setIsHovering(false);
    }

    return (
        <div
            className={"project-" + id}
            id={"project-card"}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className={"project-description"}>
                <p>{description}</p>
            </div>
            <div className={"project-preview"}>

            </div>
        </div>
    );
}

export default ProjectCard;