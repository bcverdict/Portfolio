import React, {useState} from "react";
import './ProjectCard.css';

function ProjectCard(projectDescription : string, id : number, gifPath : string, imagePath : string) : JSX.Element {

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
                <p>{projectDescription}</p>
            </div>
            <div className={"project-preview"}>
                {
                    <img className={"project-image"} src={isHovering ? gifPath : imagePath} alt="Project Preview" />
                }
            </div>
        </div>
    );
}

export default ProjectCard;