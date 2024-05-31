import './Page.css'
import DependencyManager from "../DependencyManager/DependencyManager";

function Projects() {
    const dependencyManager = DependencyManager();
    let ProjectsContent = dependencyManager.EmptyElement;

    try {
        ProjectsContent = dependencyManager.ProjectCardListElement;
    } catch (err) {
        if(err instanceof dependencyManager.AppError) {
            console.error(err.message);
        } else {
            console.error(err);
        }
    }
    return (
        <div className={"Page"}>
            {ProjectsContent}
        </div>
    );
}

export default Projects;